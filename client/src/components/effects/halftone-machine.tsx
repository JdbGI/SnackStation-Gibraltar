import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/*
 * An interactive, halftone-dot SnackStation vending machine drawn on canvas.
 * Everything is laid out in a fixed 300×580 logical space and scaled to fit.
 * - Dots swell and scatter around the pointer, with a scanline shimmer.
 * - Clicking (or pressing Enter/Space) vends a snack into the tray.
 * - It idles with the occasional demo vend so the page feels alive.
 */

const W = 300;
const H = 580;
const SPACING = 6.4;
const TAU = Math.PI * 2;

const PINK = "#FF80BF";
const BLUSH = "#FFD1E8";
const BERRY = "#891F5E";
const HOT = "#FF4FA5";
const WHITE = "#FFF3F9";
const DEEP = "#5C143F";
const PANEL = "#0D0D11";

type Rect = { x: number; y: number; w: number; h: number; r?: number };

const BODY: Rect = { x: 6, y: 6, w: 288, h: 548, r: 26 };
const HEADER: Rect = { x: 78, y: 20, w: 144, h: 44, r: 12 };
const WINDOW: Rect = { x: 22, y: 78, w: 192, h: 346, r: 10 };
const SCREEN: Rect = { x: 226, y: 90, w: 52, h: 34, r: 5 };
const KEY = { x: 229, y: 136, size: 12, gap: 4, cols: 3, rows: 4 };
const KEYPAD: Rect = { x: KEY.x, y: KEY.y, w: 3 * 12 + 2 * 4, h: 4 * 12 + 3 * 4 };
const READER: Rect = { x: 226, y: 208, w: 52, h: 54, r: 6 };
const CARD_LABEL: Rect = { x: 222, y: 268, w: 60, h: 16 };
const TRAY: Rect = { x: 22, y: 442, w: 192, h: 70, r: 10 };

const SHELVES = 5;
const COLS = 3;
const shelfBottom = (row: number) => WINDOW.y + 10 + (row + 1) * ((WINDOW.h - 22) / SHELVES);
const colCenter = (col: number) => WINDOW.x + (WINDOW.w * (2 * col + 1)) / (COLS * 2);

type Kind = "bag" | "bar" | "bottle" | "can";
type State = "idle" | "push" | "fall" | "tray" | "gone" | "spawn";

type Product = {
  row: number;
  col: number;
  kind: Kind;
  main: string;
  accent: string;
  state: State;
  t: number;
  oy: number;
  vy: number;
  rot: number;
  dir: number;
};

type Particle = { x: number; y: number; vx: number; vy: number; life: number; r: number };

const PALETTES: [string, string][] = [
  [PINK, BERRY],
  [BERRY, PINK],
  [WHITE, HOT],
  [HOT, WHITE],
  [DEEP, BLUSH],
  [BLUSH, BERRY],
];

const LAYOUT: Kind[][] = [
  ["bag", "bag", "bag"],
  ["bar", "bar", "bar"],
  ["bag", "bar", "bag"],
  ["bottle", "bottle", "bottle"],
  ["can", "can", "can"],
];

const SCREEN_IDLE = ["SNACKS", "DRINKS", "24/7", "CARD"];

function createProducts(): Product[] {
  const items: Product[] = [];
  LAYOUT.forEach((kinds, row) =>
    kinds.forEach((kind, col) => {
      const [main, accent] = PALETTES[(row * 2 + col * 3) % PALETTES.length];
      items.push({ row, col, kind, main, accent, state: "idle", t: 0, oy: 0, vy: 0, rot: 0, dir: 1 });
    }),
  );
  return items;
}

function inRect(x: number, y: number, r: Rect, pad = 0) {
  return x > r.x - pad && x < r.x + r.w + pad && y > r.y - pad && y < r.y + r.h + pad;
}

function inRoundRect(x: number, y: number, r: Rect, inset = 0) {
  const rad = Math.max((r.r ?? 0) - inset, 0);
  const x0 = r.x + inset;
  const y0 = r.y + inset;
  const x1 = r.x + r.w - inset;
  const y1 = r.y + r.h - inset;
  if (x < x0 || x > x1 || y < y0 || y > y1) return false;
  const cx = x < x0 + rad ? x0 + rad : x > x1 - rad ? x1 - rad : x;
  const cy = y < y0 + rad ? y0 + rad : y > y1 - rad ? y1 - rad : y;
  return (x - cx) ** 2 + (y - cy) ** 2 <= rad * rad;
}

function distToRect(x: number, y: number, r: Rect) {
  const dx = Math.max(r.x - x, 0, x - (r.x + r.w));
  const dy = Math.max(r.y - y, 0, y - (r.y + r.h));
  return Math.hypot(dx, dy);
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

const easeOut = (t: number) => 1 - Math.pow(1 - Math.min(Math.max(t, 0), 1), 3);

type Dot = { x: number; y: number; base: number; glass: boolean };

function createDots(): Dot[] {
  const dots: Dot[] = [];
  const exclusions: Rect[] = [HEADER, SCREEN, KEYPAD, READER, CARD_LABEL, TRAY];
  let row = 0;
  for (let y = BODY.y + SPACING / 2; y < BODY.y + BODY.h; y += SPACING * 0.866, row++) {
    const offset = row % 2 ? SPACING / 2 : 0;
    for (let x = BODY.x + SPACING / 2 + offset; x < BODY.x + BODY.w; x += SPACING) {
      if (!inRoundRect(x, y, BODY, 1.5)) continue;
      if (exclusions.some((z) => inRect(x, y, z, 3.5))) continue;
      const glass = inRoundRect(x, y, WINDOW, 2);
      if (glass) {
        dots.push({ x, y, base: 0.7, glass });
        continue;
      }
      const edge = Math.min(x - BODY.x, BODY.x + BODY.w - x, y - BODY.y, BODY.y + BODY.h - y);
      const edgeF = 1 - Math.min(edge / 42, 1);
      const texture = 0.5 + 0.5 * Math.sin(x * 0.07 + y * 0.03) * Math.cos(y * 0.05 - x * 0.02);
      const near = Math.min(distToRect(x, y, WINDOW), distToRect(x, y, TRAY));
      const glow = 1 - Math.min(near / 22, 1);
      const base = (1.35 + 0.95 * edgeF + 0.45 * texture) * (1 - 0.55 * glow);
      dots.push({ x, y, base, glass });
    }
  }
  return dots;
}

/* ---------------------------- product art ---------------------------- */

function drawBag(ctx: CanvasRenderingContext2D, main: string, accent: string) {
  const w = 40;
  const h = 50;
  const x = -w / 2;
  const y = -h;
  ctx.beginPath();
  ctx.moveTo(x, y + 4);
  for (let i = 1; i <= 8; i++) ctx.lineTo(x + (w * i) / 8, y + (i % 2 ? 0 : 4));
  ctx.quadraticCurveTo(x + w + 3, y + h / 2, x + w, -4);
  for (let i = 7; i >= 0; i--) ctx.lineTo(x + (w * i) / 8, i % 2 ? 0 : -4);
  ctx.quadraticCurveTo(x - 3, y + h / 2, x, y + 4);
  ctx.closePath();
  ctx.fillStyle = main;
  ctx.fill();
  // Starburst "logo" on the packet
  const cy = y + h * 0.52;
  ctx.fillStyle = accent;
  ctx.beginPath();
  for (let i = 0; i < 16; i++) {
    const r = i % 2 ? 5 : 11;
    const a = (i / 16) * TAU - Math.PI / 2;
    ctx.lineTo(Math.cos(a) * r, cy + Math.sin(a) * r);
  }
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = main;
  ctx.beginPath();
  ctx.arc(0, cy, 3, 0, TAU);
  ctx.fill();
  ctx.fillStyle = "rgba(255,255,255,0.28)";
  ctx.fillRect(x + 5, y + 9, 3, h - 18);
}

function drawBar(ctx: CanvasRenderingContext2D, main: string, accent: string) {
  const w = 46;
  const h = 30;
  const x = -w / 2;
  const y = -h;
  ctx.save();
  roundRect(ctx, x, y, w, h, 3);
  ctx.fillStyle = main;
  ctx.fill();
  ctx.clip();
  ctx.fillStyle = accent;
  ctx.beginPath();
  ctx.moveTo(x + 12, y);
  ctx.lineTo(x + 24, y);
  ctx.lineTo(x + 17, y + h);
  ctx.lineTo(x + 5, y + h);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "rgba(0,0,0,0.22)";
  ctx.fillRect(x, y, 4, h);
  ctx.fillRect(x + w - 4, y, 4, h);
  ctx.fillStyle = "rgba(255,255,255,0.75)";
  ctx.fillRect(x + 26, y + h / 2 - 5, 13, 3);
  ctx.fillRect(x + 26, y + h / 2 + 1, 8, 3);
  ctx.restore();
}

function drawBottle(ctx: CanvasRenderingContext2D, main: string, accent: string) {
  const w = 22;
  const bodyH = 36;
  ctx.fillStyle = main;
  roundRect(ctx, -w / 2, -bodyH, w, bodyH, 6);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(-w / 2, -bodyH + 5);
  ctx.quadraticCurveTo(-w / 2, -bodyH - 8, -4.5, -bodyH - 11);
  ctx.lineTo(4.5, -bodyH - 11);
  ctx.quadraticCurveTo(w / 2, -bodyH - 8, w / 2, -bodyH + 5);
  ctx.closePath();
  ctx.fill();
  ctx.fillRect(-4, -bodyH - 17, 8, 7);
  ctx.fillStyle = accent;
  roundRect(ctx, -5.5, -bodyH - 22, 11, 6, 1.5);
  ctx.fill();
  ctx.fillRect(-w / 2, -bodyH * 0.72, w, bodyH * 0.36);
  ctx.fillStyle = "rgba(255,255,255,0.35)";
  ctx.fillRect(-w / 2 + 3.5, -bodyH + 3, 2.5, bodyH - 8);
}

function drawCan(ctx: CanvasRenderingContext2D, main: string, accent: string) {
  const w = 26;
  const h = 46;
  const x = -w / 2;
  const y = -h;
  ctx.fillStyle = main;
  roundRect(ctx, x, y, w, h, 4);
  ctx.fill();
  ctx.fillStyle = accent;
  ctx.fillRect(x, y + h * 0.36, w, h * 0.28);
  ctx.fillStyle = "rgba(0,0,0,0.25)";
  ctx.fillRect(x + 1, y, w - 2, 3);
  ctx.fillRect(x + 1, y + h - 3, w - 2, 3);
  ctx.fillStyle = "rgba(255,255,255,0.35)";
  ctx.fillRect(x + 4, y + 5, 3, h - 10);
}

const PRODUCT_ART: Record<Kind, typeof drawBag> = {
  bag: drawBag,
  bar: drawBar,
  bottle: drawBottle,
  can: drawCan,
};

/* ------------------------------ component ----------------------------- */

type Props = {
  className?: string;
  onVend?: (code: string, byUser: boolean) => void;
  /** Wait before the first demo vend (e.g. until the intro finishes). */
  autoplay?: boolean;
};

export function HalftoneMachine({ className, onVend, autoplay = true }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();
  const onVendRef = useRef(onVend);
  onVendRef.current = onVend;
  const autoplayRef = useRef(autoplay);
  autoplayRef.current = autoplay;
  const vendRef = useRef<() => void>(() => {});

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dots = createDots();
    const products = createProducts();
    let particles: Particle[] = [];

    const pointer = { x: -999, y: -999, tx: -999, ty: -999, amount: 0, inside: false };
    let screen = { text: "", until: 0 };
    let litKey = -1;
    let litUntil = 0;
    let readerPulse = -10;
    let trayGlow = 0;
    let now = 0;
    let last = performance.now();
    let nextAuto = 4.5;
    let raf = 0;
    let running = false;
    let visible = true;

    const logo = new Image();
    logo.src = "/brand/snackstation-logo-pink.png";

    /* sizing */
    const resize = () => {
      const cssW = wrap.clientWidth;
      const cssH = (cssW * H) / W;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);
      canvas.style.height = `${cssH}px`;
      const s = (cssW / W) * dpr;
      ctx.setTransform(s, 0, 0, s, 0, 0);
      if (!running) draw();
    };

    /* vending */
    const vend = (byUser: boolean) => {
      if (products.some((p) => p.state === "push" || p.state === "fall")) return;
      const idle = products.filter((p) => p.state === "idle");
      if (!idle.length) return;
      const p = idle[Math.floor(Math.random() * idle.length)];
      p.state = "push";
      p.t = 0;
      p.oy = 0;
      p.vy = 0;
      p.rot = 0;
      p.dir = Math.random() > 0.5 ? 1 : -1;
      const code = `${"ABCDE"[p.row]}${p.col + 1}`;
      screen = { text: code, until: now + 1.2 };
      litKey = p.col;
      litUntil = now + 0.5;
      readerPulse = now;
      onVendRef.current?.(code, byUser);
    };
    vendRef.current = () => {
      vend(true);
      nextAuto = now + 12;
    };

    /* simulation */
    const update = (dt: number) => {
      const follow = 1 - Math.pow(0.001, dt);
      pointer.x += (pointer.tx - pointer.x) * follow;
      pointer.y += (pointer.ty - pointer.y) * follow;
      pointer.amount += ((pointer.inside ? 1 : 0) - pointer.amount) * follow * 0.6;

      if (autoplayRef.current && now > nextAuto) {
        vend(false);
        nextAuto = now + 9;
      }

      for (const p of products) {
        p.t += dt;
        if (p.state === "push" && p.t > 0.45) {
          p.state = "fall";
          p.t = 0;
        } else if (p.state === "fall") {
          p.vy += 1500 * dt;
          p.oy += p.vy * dt;
          p.rot += dt * 2.4 * p.dir;
          if (shelfBottom(p.row) + p.oy - 56 > WINDOW.y + WINDOW.h) {
            p.state = "tray";
            p.t = 0;
            trayGlow = 1;
            screen = { text: "ENJOY!", until: now + 1.6 };
            const cx = TRAY.x + TRAY.w / 2;
            const cy = TRAY.y + TRAY.h / 2;
            for (let i = 0; i < 18; i++) {
              const a = -Math.PI * (0.1 + 0.8 * Math.random());
              const v = 90 + Math.random() * 160;
              particles.push({
                x: cx + (Math.random() - 0.5) * 60,
                y: cy,
                vx: Math.cos(a) * v,
                vy: Math.sin(a) * v,
                life: 0.7 + Math.random() * 0.5,
                r: 1.2 + Math.random() * 2.2,
              });
            }
          }
        } else if (p.state === "tray" && p.t > 1.9) {
          p.state = "gone";
          p.t = 0;
        } else if (p.state === "gone" && p.t > 1.2) {
          p.state = "spawn";
          p.t = 0;
        } else if (p.state === "spawn" && p.t > 0.5) {
          p.state = "idle";
          p.t = 0;
        }
      }

      trayGlow = Math.max(0, trayGlow - dt * 0.9);
      particles = particles.filter((pt) => {
        pt.life -= dt;
        pt.vy += 520 * dt;
        pt.x += pt.vx * dt;
        pt.y += pt.vy * dt;
        return pt.life > 0;
      });
    };

    /* rendering */
    const drawProduct = (p: Product) => {
      const art = PRODUCT_ART[p.kind];
      const cx = colCenter(p.col);
      const by = shelfBottom(p.row);
      ctx.save();
      if (p.state === "idle") {
        ctx.translate(cx, by);
      } else if (p.state === "push") {
        const k = easeOut(p.t / 0.45);
        ctx.translate(cx, by - 3 * k);
        ctx.scale(1 + 0.12 * k, 1 + 0.12 * k);
      } else if (p.state === "fall") {
        ctx.translate(cx, by + p.oy - 25);
        ctx.rotate(p.rot);
        ctx.scale(1.12, 1.12);
        ctx.translate(0, 25);
      } else if (p.state === "spawn") {
        const k = easeOut(p.t / 0.5);
        ctx.globalAlpha = k;
        ctx.translate(cx, by);
        ctx.scale(0.85 + 0.15 * k, 0.85 + 0.15 * k);
      } else {
        ctx.restore();
        return;
      }
      art(ctx, p.main, p.accent);
      ctx.restore();
    };

    const drawCoil = (col: number, row: number) => {
      const cx = colCenter(col);
      const by = shelfBottom(row);
      ctx.strokeStyle = "rgba(255,128,191,0.4)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.ellipse(cx - 20 + i * 8, by - 3, 3.2, 5, 0.35, 0, TAU);
        ctx.stroke();
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // feet
      ctx.fillStyle = BERRY;
      roundRect(ctx, 34, 552, 36, 14, 4);
      ctx.fill();
      roundRect(ctx, 230, 552, 36, 14, 4);
      ctx.fill();

      // window interior
      const wr = WINDOW.r ?? 0;
      const grad = ctx.createLinearGradient(0, WINDOW.y, 0, WINDOW.y + WINDOW.h);
      grad.addColorStop(0, "rgba(255,128,191,0.07)");
      grad.addColorStop(1, "rgba(137,31,94,0.16)");
      roundRect(ctx, WINDOW.x, WINDOW.y, WINDOW.w, WINDOW.h, wr);
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.save();
      roundRect(ctx, WINDOW.x, WINDOW.y, WINDOW.w, WINDOW.h, wr);
      ctx.clip();
      ctx.font = "700 6.5px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (let row = 0; row < SHELVES; row++) {
        const y = shelfBottom(row);
        ctx.fillStyle = "rgba(255,128,191,0.35)";
        ctx.fillRect(WINDOW.x + 6, y, WINDOW.w - 12, 2);
        for (let col = 0; col < COLS; col++) {
          ctx.fillStyle = "rgba(255,128,191,0.7)";
          ctx.fillText(`${"ABCDE"[row]}${col + 1}`, colCenter(col), y + 7);
        }
      }
      for (const p of products) if (p.state !== "fall") drawProduct(p);
      for (let row = 0; row < SHELVES; row++) for (let col = 0; col < COLS; col++) drawCoil(col, row);
      for (const p of products) if (p.state === "fall") drawProduct(p);
      ctx.restore();

      // halftone body + glass
      const scanY = ((now * 150) % (H + 320)) - 160;
      const main = new Path2D();
      const hot = new Path2D();
      const glass = new Path2D();
      const R = 74;
      const pa = pointer.amount;
      const maxR = SPACING * 0.52;
      for (const d of dots) {
        let r = d.base;
        let x = d.x;
        let y = d.y;
        const band = Math.exp(-((y - scanY) ** 2) / 1600);
        r *= 1 + 0.4 * band;
        let heat = 0;
        if (pa > 0.01) {
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < R * R) {
            const dist = Math.sqrt(dist2) || 1;
            heat = (1 - dist / R) ** 2 * pa;
            r *= 1 + 1.2 * heat;
            x += (dx / dist) * 8 * heat;
            y += (dy / dist) * 8 * heat;
          }
        }
        r = Math.min(r, d.glass ? 2 : maxR);
        const path = d.glass ? glass : heat > 0.22 ? hot : main;
        path.moveTo(x + r, y);
        path.arc(x, y, r, 0, TAU);
      }
      ctx.fillStyle = PINK;
      ctx.fill(main);
      ctx.fillStyle = BLUSH;
      ctx.fill(hot);
      ctx.fillStyle = "rgba(255,128,191,0.28)";
      ctx.fill(glass);

      // window frame + moving reflection
      ctx.save();
      roundRect(ctx, WINDOW.x, WINDOW.y, WINDOW.w, WINDOW.h, wr);
      ctx.clip();
      const sweep = ((now * 40) % 520) - 180;
      const refl = ctx.createLinearGradient(WINDOW.x + sweep, WINDOW.y, WINDOW.x + sweep + 140, WINDOW.y + 160);
      refl.addColorStop(0, "rgba(255,255,255,0)");
      refl.addColorStop(0.5, "rgba(255,255,255,0.07)");
      refl.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = refl;
      ctx.fillRect(WINDOW.x, WINDOW.y, WINDOW.w, WINDOW.h);
      ctx.restore();
      roundRect(ctx, WINDOW.x, WINDOW.y, WINDOW.w, WINDOW.h, wr);
      ctx.strokeStyle = "rgba(255,128,191,0.6)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // header plate with the wordmark
      roundRect(ctx, HEADER.x, HEADER.y, HEADER.w, HEADER.h, HEADER.r ?? 0);
      ctx.fillStyle = PANEL;
      ctx.fill();
      ctx.strokeStyle = "rgba(255,128,191,0.4)";
      ctx.lineWidth = 1;
      ctx.stroke();
      if (logo.complete && logo.naturalWidth) {
        const lh = 30;
        const lw = (logo.naturalWidth / logo.naturalHeight) * lh;
        ctx.drawImage(logo, HEADER.x + (HEADER.w - lw) / 2, HEADER.y + (HEADER.h - lh) / 2, lw, lh);
      }

      // screen
      roundRect(ctx, SCREEN.x, SCREEN.y, SCREEN.w, SCREEN.h, SCREEN.r ?? 0);
      ctx.fillStyle = "#16060F";
      ctx.fill();
      ctx.strokeStyle = "rgba(255,128,191,0.7)";
      ctx.stroke();
      const idleText = pointer.inside
        ? "TAP ME"
        : SCREEN_IDLE[Math.floor(now / 1.6) % SCREEN_IDLE.length];
      const text = now < screen.until ? screen.text : idleText;
      ctx.save();
      ctx.shadowColor = PINK;
      ctx.shadowBlur = 8;
      ctx.fillStyle = PINK;
      ctx.font = "700 9px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, SCREEN.x + SCREEN.w / 2, SCREEN.y + SCREEN.h / 2 + 0.5);
      ctx.restore();

      // keypad
      for (let i = 0; i < KEY.cols * KEY.rows; i++) {
        const kx = KEY.x + (i % KEY.cols) * (KEY.size + KEY.gap);
        const ky = KEY.y + Math.floor(i / KEY.cols) * (KEY.size + KEY.gap);
        roundRect(ctx, kx, ky, KEY.size, KEY.size, 2.5);
        const lit = i === litKey && now < litUntil;
        ctx.fillStyle = lit ? PINK : PANEL;
        ctx.fill();
        ctx.strokeStyle = "rgba(255,128,191,0.5)";
        ctx.stroke();
        ctx.fillStyle = lit ? PANEL : "rgba(255,128,191,0.6)";
        ctx.beginPath();
        ctx.arc(kx + KEY.size / 2, ky + KEY.size / 2, 1.2, 0, TAU);
        ctx.fill();
      }

      // contactless card reader
      roundRect(ctx, READER.x, READER.y, READER.w, READER.h, READER.r ?? 0);
      ctx.fillStyle = PANEL;
      ctx.fill();
      ctx.strokeStyle = "rgba(255,128,191,0.6)";
      ctx.stroke();
      const since = now - readerPulse;
      const cx = READER.x + 18;
      const cy = READER.y + READER.h / 2;
      ctx.lineCap = "round";
      for (let i = 0; i < 3; i++) {
        const active = since < 1.1 && Math.sin((since * 10 - i) * 1.5) > 0;
        ctx.strokeStyle = active ? BLUSH : "rgba(255,128,191,0.75)";
        ctx.lineWidth = active ? 2.4 : 1.8;
        ctx.beginPath();
        ctx.arc(cx, cy, 6 + i * 6, -Math.PI / 4, Math.PI / 4);
        ctx.stroke();
      }
      ctx.lineCap = "butt";
      ctx.fillStyle = "rgba(255,128,191,0.9)";
      ctx.font = "700 6px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("CARD ONLY", CARD_LABEL.x + CARD_LABEL.w / 2, CARD_LABEL.y + CARD_LABEL.h / 2);

      // dispensing tray
      roundRect(ctx, TRAY.x, TRAY.y, TRAY.w, TRAY.h, TRAY.r ?? 0);
      ctx.fillStyle = PANEL;
      ctx.fill();
      if (trayGlow > 0) {
        const g = ctx.createRadialGradient(
          TRAY.x + TRAY.w / 2, TRAY.y + TRAY.h, 4,
          TRAY.x + TRAY.w / 2, TRAY.y + TRAY.h, TRAY.w * 0.7,
        );
        g.addColorStop(0, `rgba(255,128,191,${0.55 * trayGlow})`);
        g.addColorStop(1, "rgba(255,128,191,0)");
        ctx.fillStyle = g;
        ctx.fill();
      }
      ctx.save();
      roundRect(ctx, TRAY.x, TRAY.y, TRAY.w, TRAY.h, TRAY.r ?? 0);
      ctx.clip();
      for (const p of products) {
        if (p.state !== "tray") continue;
        const k = easeOut(p.t / 0.35);
        const fade = p.t > 1.5 ? 1 - (p.t - 1.5) / 0.4 : 1;
        ctx.save();
        ctx.globalAlpha = Math.max(fade, 0);
        ctx.translate(colCenter(p.col) + 10 * p.dir, TRAY.y - 40 + k * (TRAY.h + 16));
        ctx.rotate((Math.PI / 2) * p.dir);
        ctx.translate(0, 18);
        PRODUCT_ART[p.kind](ctx, p.main, p.accent);
        ctx.restore();
      }
      ctx.restore();
      roundRect(ctx, TRAY.x, TRAY.y, TRAY.w, TRAY.h, TRAY.r ?? 0);
      ctx.strokeStyle = "rgba(255,128,191,0.6)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.fillStyle = "rgba(255,128,191,0.18)";
      ctx.fillRect(TRAY.x + 10, TRAY.y + 10, TRAY.w - 20, 2);
      ctx.fillStyle = "rgba(255,128,191,0.85)";
      ctx.font = "700 8px 'JetBrains Mono', monospace";
      ctx.fillText("P U S H", TRAY.x + TRAY.w / 2, TRAY.y + 22);

      // particles
      for (const pt of particles) {
        ctx.globalAlpha = Math.min(pt.life * 1.5, 1);
        ctx.fillStyle = pt.r > 2.4 ? BLUSH : PINK;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.r, 0, TAU);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const loop = (ts: number) => {
      const dt = Math.min((ts - last) / 1000, 0.05);
      last = ts;
      now += dt;
      update(dt);
      draw();
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reduce) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };
    const sync = () => (visible && !document.hidden ? start() : stop());

    /* pointer */
    const toLocal = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.tx = ((e.clientX - rect.left) / rect.width) * W;
      pointer.ty = ((e.clientY - rect.top) / rect.height) * H;
    };
    const onEnter = (e: PointerEvent) => {
      toLocal(e);
      if (!pointer.inside) {
        pointer.x = pointer.tx;
        pointer.y = pointer.ty;
      }
      pointer.inside = true;
    };
    const onMove = (e: PointerEvent) => {
      toLocal(e);
      pointer.inside = true;
    };
    const onLeave = () => {
      pointer.inside = false;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    io.observe(wrap);
    document.addEventListener("visibilitychange", sync);
    wrap.addEventListener("pointerenter", onEnter);
    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);
    logo.onload = () => !running && draw();
    document.fonts?.ready.then(() => !running && draw());

    resize();
    sync();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
      wrap.removeEventListener("pointerenter", onEnter);
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
      logo.onload = null;
    };
  }, [reduce]);

  return (
    <button
      ref={wrapRef}
      type="button"
      data-cursor="Vend"
      onClick={() => vendRef.current()}
      aria-label="Interactive SnackStation vending machine. Press to vend a snack."
      className={cn(
        "relative block w-full cursor-pointer touch-manipulation select-none rounded-[28px] focus-visible:outline-offset-8",
        className,
      )}
    >
      <canvas ref={canvasRef} className="block w-full" />
    </button>
  );
}
