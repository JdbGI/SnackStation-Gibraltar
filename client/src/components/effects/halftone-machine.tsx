import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/*
 * A still, halftone-dot SnackStation vending machine drawn on canvas.
 * It sits completely still; clicking it (or pressing Enter/Space) drops a
 * drink into the tray, just for fun. The canvas only redraws while that
 * little animation is playing.
 * Everything is laid out in a fixed 300×580 logical space and scaled to fit.
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
};

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

const isDrink = (kind: Kind) => kind === "bottle" || kind === "can";

// How long each step of a vend lasts, in seconds.
const PUSH = 0.35;
const IN_TRAY = 1.8;
const GONE = 0.6;
const SPAWN = 0.4;

function createProducts(): Product[] {
  const items: Product[] = [];
  LAYOUT.forEach((kinds, row) =>
    kinds.forEach((kind, col) => {
      const [main, accent] = PALETTES[(row * 2 + col * 3) % PALETTES.length];
      items.push({ row, col, kind, main, accent, state: "idle", t: 0, oy: 0, vy: 0 });
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

/** The halftone body is fixed, so its dots are built into two paths once. */
function createDotPaths() {
  const body = new Path2D();
  const glass = new Path2D();
  const exclusions: Rect[] = [HEADER, SCREEN, KEYPAD, READER, CARD_LABEL, TRAY];
  let row = 0;
  for (let y = BODY.y + SPACING / 2; y < BODY.y + BODY.h; y += SPACING * 0.866, row++) {
    const offset = row % 2 ? SPACING / 2 : 0;
    for (let x = BODY.x + SPACING / 2 + offset; x < BODY.x + BODY.w; x += SPACING) {
      if (!inRoundRect(x, y, BODY, 1.5)) continue;
      if (exclusions.some((z) => inRect(x, y, z, 3.5))) continue;
      if (inRoundRect(x, y, WINDOW, 2)) {
        glass.moveTo(x + 0.7, y);
        glass.arc(x, y, 0.7, 0, TAU);
        continue;
      }
      // Bigger dots towards the outer edge, smaller near the window and tray,
      // like the dotted machine artwork.
      const edge = Math.min(x - BODY.x, BODY.x + BODY.w - x, y - BODY.y, BODY.y + BODY.h - y);
      const edgeF = 1 - Math.min(edge / 42, 1);
      const texture = 0.5 + 0.5 * Math.sin(x * 0.07 + y * 0.03) * Math.cos(y * 0.05 - x * 0.02);
      const near = Math.min(distToRect(x, y, WINDOW), distToRect(x, y, TRAY));
      const glow = 1 - Math.min(near / 22, 1);
      const r = Math.min((1.35 + 0.95 * edgeF + 0.45 * texture) * (1 - 0.55 * glow), SPACING * 0.52);
      body.moveTo(x + r, y);
      body.arc(x, y, r, 0, TAU);
    }
  }
  return { body, glass };
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
  onVend?: () => void;
};

export function HalftoneMachine({ className, onVend }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();
  const onVendRef = useRef(onVend);
  onVendRef.current = onVend;
  const vendRef = useRef<() => void>(() => {});

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dots = createDotPaths();
    const products = createProducts();
    let screen = { text: "", until: 0 };
    let litKey = -1;
    let paying = false;
    let now = 0;
    let last = 0;
    let raf = 0;
    let resetTimer = 0;

    const logo = new Image();
    logo.src = "/brand/snackstation-logo-pink.png";

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // feet
      ctx.fillStyle = BERRY;
      roundRect(ctx, 34, 552, 36, 14, 4);
      ctx.fill();
      roundRect(ctx, 230, 552, 36, 14, 4);
      ctx.fill();

      // window interior, shelves and products
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
      ctx.fillStyle = "rgba(255,128,191,0.35)";
      for (let row = 0; row < SHELVES; row++) {
        ctx.fillRect(WINDOW.x + 6, shelfBottom(row), WINDOW.w - 12, 2);
      }
      for (const p of products) {
        const cx = colCenter(p.col);
        const by = shelfBottom(p.row);
        ctx.save();
        if (p.state === "idle") {
          ctx.translate(cx, by);
        } else if (p.state === "push") {
          const k = easeOut(p.t / PUSH);
          ctx.translate(cx, by - 3 * k);
          ctx.scale(1 + 0.1 * k, 1 + 0.1 * k);
        } else if (p.state === "fall") {
          ctx.translate(cx, by + p.oy);
          ctx.scale(1.1, 1.1);
        } else if (p.state === "spawn") {
          ctx.globalAlpha = easeOut(p.t / SPAWN);
          ctx.translate(cx, by);
        } else {
          ctx.restore();
          continue;
        }
        PRODUCT_ART[p.kind](ctx, p.main, p.accent);
        ctx.restore();
      }
      ctx.restore();

      // halftone body and glass
      ctx.fillStyle = PINK;
      ctx.fill(dots.body);
      ctx.fillStyle = "rgba(255,128,191,0.28)";
      ctx.fill(dots.glass);
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
      ctx.fillStyle = PINK;
      ctx.font = "700 9px 'JetBrains Mono', monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(now < screen.until ? screen.text : "READY", SCREEN.x + SCREEN.w / 2, SCREEN.y + SCREEN.h / 2 + 0.5);

      // keypad
      for (let i = 0; i < KEY.cols * KEY.rows; i++) {
        const kx = KEY.x + (i % KEY.cols) * (KEY.size + KEY.gap);
        const ky = KEY.y + Math.floor(i / KEY.cols) * (KEY.size + KEY.gap);
        const lit = i === litKey;
        roundRect(ctx, kx, ky, KEY.size, KEY.size, 2.5);
        ctx.fillStyle = lit ? PINK : PANEL;
        ctx.fill();
        ctx.strokeStyle = "rgba(255,128,191,0.5)";
        ctx.stroke();
      }

      // contactless card reader
      roundRect(ctx, READER.x, READER.y, READER.w, READER.h, READER.r ?? 0);
      ctx.fillStyle = PANEL;
      ctx.fill();
      ctx.strokeStyle = "rgba(255,128,191,0.6)";
      ctx.stroke();
      ctx.lineCap = "round";
      ctx.strokeStyle = paying ? BLUSH : "rgba(255,128,191,0.75)";
      ctx.lineWidth = 1.8;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(READER.x + 18, READER.y + READER.h / 2, 6 + i * 6, -Math.PI / 4, Math.PI / 4);
        ctx.stroke();
      }
      ctx.lineCap = "butt";
      ctx.fillStyle = "rgba(255,128,191,0.9)";
      ctx.font = "700 6px 'JetBrains Mono', monospace";
      ctx.fillText("CARD ONLY", CARD_LABEL.x + CARD_LABEL.w / 2, CARD_LABEL.y + CARD_LABEL.h / 2);

      // dispensing tray
      roundRect(ctx, TRAY.x, TRAY.y, TRAY.w, TRAY.h, TRAY.r ?? 0);
      ctx.fillStyle = PANEL;
      ctx.fill();
      ctx.save();
      roundRect(ctx, TRAY.x, TRAY.y, TRAY.w, TRAY.h, TRAY.r ?? 0);
      ctx.clip();
      for (const p of products) {
        if (p.state !== "tray") continue;
        const k = easeOut(p.t / 0.3);
        const fade = p.t > IN_TRAY - 0.4 ? (IN_TRAY - p.t) / 0.4 : 1;
        ctx.save();
        ctx.globalAlpha = Math.max(fade, 0);
        // Lying on its side, nudged towards the column it dropped from.
        ctx.translate(TRAY.x + TRAY.w / 2 - 5 + (p.col - 1) * 36, TRAY.y - 40 + k * (TRAY.h + 16));
        ctx.rotate(Math.PI / 2);
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
    };

    const update = (dt: number) => {
      for (const p of products) {
        if (p.state === "idle") continue;
        p.t += dt;
        if (p.state === "push" && p.t > PUSH) {
          p.state = "fall";
          p.t = 0;
          litKey = -1;
          paying = false;
        } else if (p.state === "fall") {
          p.vy += 1500 * dt;
          p.oy += p.vy * dt;
          if (shelfBottom(p.row) + p.oy - 60 > WINDOW.y + WINDOW.h) {
            p.state = "tray";
            p.t = 0;
            screen = { text: "ENJOY!", until: now + IN_TRAY };
          }
        } else if (p.state === "tray" && p.t > IN_TRAY) {
          p.state = "gone";
          p.t = 0;
        } else if (p.state === "gone" && p.t > GONE) {
          p.state = "spawn";
          p.t = 0;
        } else if (p.state === "spawn" && p.t > SPAWN) {
          p.state = "idle";
          p.t = 0;
        }
      }
    };

    const busy = () => products.some((p) => p.state !== "idle");

    const loop = (ts: number) => {
      const dt = Math.min((ts - last) / 1000, 0.05);
      last = ts;
      now += dt;
      update(dt);
      draw();
      raf = busy() ? requestAnimationFrame(loop) : 0;
    };

    vendRef.current = () => {
      if (busy()) return;
      const drinks = products.filter((p) => isDrink(p.kind));
      const p = drinks[Math.floor(Math.random() * drinks.length)];
      onVendRef.current?.();

      if (reduce) {
        // No motion: the drink simply appears in the tray for a moment.
        p.state = "tray";
        p.t = 0.5;
        screen = { text: "ENJOY!", until: Infinity };
        draw();
        resetTimer = window.setTimeout(() => {
          p.state = "idle";
          screen = { text: "", until: 0 };
          draw();
        }, 2000);
        return;
      }

      p.state = "push";
      p.t = 0;
      p.oy = 0;
      p.vy = 0;
      litKey = p.col;
      paying = true;
      screen = { text: `${"ABCDE"[p.row]}${p.col + 1}`, until: now + 0.8 };
      last = performance.now();
      raf = requestAnimationFrame(loop);
    };

    const resize = () => {
      const cssW = wrap.clientWidth;
      const cssH = (cssW * H) / W;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);
      canvas.style.height = `${cssH}px`;
      const s = (cssW / W) * dpr;
      ctx.setTransform(s, 0, 0, s, 0, 0);
      draw();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);
    logo.onload = draw;
    document.fonts?.ready.then(draw);
    resize();

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(resetTimer);
      ro.disconnect();
      logo.onload = null;
    };
  }, [reduce]);

  return (
    <button
      ref={wrapRef}
      type="button"
      data-cursor="Drink?"
      onClick={() => vendRef.current()}
      aria-label="SnackStation vending machine. Press for a drink."
      className={cn(
        "relative block w-full cursor-pointer touch-manipulation select-none rounded-[28px] focus-visible:outline-offset-8",
        className,
      )}
    >
      <canvas ref={canvasRef} className="block w-full" />
    </button>
  );
}
