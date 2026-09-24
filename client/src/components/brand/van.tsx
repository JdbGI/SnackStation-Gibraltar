import { motion, type Variants } from "framer-motion";
import { useId } from "react";
import { EASE_OUT_EXPO } from "@/components/effects/primitives";
import { cn } from "@/lib/utils";

/*
 * A stylised SnackStation van: flat brand pink with the berry offset shadow
 * from the favicon, halftone dots along the sills and the wordmark's speed
 * lines trailing behind. It drives in once when scrolled into view, then
 * stays put.
 */

const BODY =
  "M130 60 H520 C540 60 552 65 562 77 L622 146 C628 153 636 156 646 158 L672 163 C684 166 692 176 692 190 V246 C692 256 684 262 674 262 H130 C118 262 110 254 110 242 V80 C110 69 119 60 130 60 Z";
const CAB_WINDOW =
  "M506 80 H536 C543 80 548 83 552 88 L602 148 C605 152 602 156 597 156 H506 C501 156 498 153 498 148 V88 C498 83 501 80 506 80 Z";
const WHEELS = [220, 590];
const SPEED_LINES = [40, 60, 80, 100, 120, 140];

const drive = { duration: 1.5, ease: EASE_OUT_EXPO };

const vanVariants: Variants = {
  parked: { x: -380, opacity: 0 },
  arrived: { x: 0, opacity: 1, transition: drive },
};
const wheelVariants: Variants = {
  parked: { rotate: -720 },
  arrived: { rotate: 0, transition: drive },
};
const trailVariants: Variants = {
  parked: { opacity: 0, x: -380 },
  arrived: {
    opacity: [0, 1, 0.3],
    x: 0,
    transition: { ...drive, opacity: { duration: 2.2, times: [0, 0.35, 1] } },
  },
};

function Wheel({ cx }: { cx: number }) {
  return (
    <motion.g variants={wheelVariants}>
      <circle cx={cx} cy={262} r={38} fill="#0A0A0C" />
      <circle cx={cx} cy={262} r={21} fill="#FFC7E3" />
      <circle cx={cx} cy={262} r={7} fill="#891F5E" />
      {Array.from({ length: 5 }).map((_, i) => {
        const a = (i / 5) * Math.PI * 2;
        return (
          <circle
            key={i}
            cx={cx + Math.cos(a) * 14}
            cy={262 + Math.sin(a) * 14}
            r={2.6}
            fill="#891F5E"
          />
        );
      })}
    </motion.g>
  );
}

export default function Van({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const ids = {
    body: `van-body-${uid}`,
    window: `van-window-${uid}`,
    dots: `van-dots-${uid}`,
    blur: `van-blur-${uid}`,
  };

  return (
    <motion.svg
      viewBox="0 0 720 330"
      role="img"
      aria-label="Illustration of the SnackStation van"
      initial="parked"
      whileInView="arrived"
      viewport={{ once: true, margin: "-15% 0px" }}
      className={cn("w-full overflow-visible", className)}
    >
      <defs>
        <clipPath id={ids.body}>
          <path d={BODY} />
        </clipPath>
        <clipPath id={ids.window}>
          <path d={CAB_WINDOW} />
        </clipPath>
        <pattern id={ids.dots} width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="5" cy="5" r="2.3" fill="#891F5E" />
        </pattern>
        <filter id={ids.blur} x="-20%" y="-200%" width="140%" height="500%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      {/* road */}
      <line
        x1="0"
        x2="720"
        y1="314"
        y2="314"
        stroke="rgba(255,255,255,0.14)"
        strokeWidth="3"
        strokeDasharray="36 22"
        strokeLinecap="round"
      />

      {/* speed lines trailing behind, like the tail of the wordmark */}
      <motion.g variants={trailVariants}>
        {SPEED_LINES.map((w, i) => (
          <rect
            key={w}
            x={96 - w}
            y={118 + i * 22}
            width={w}
            height={11}
            rx={5.5}
            fill={i % 2 ? "#891F5E" : "#FF80BF"}
          />
        ))}
      </motion.g>

      <motion.g variants={vanVariants}>
        <ellipse cx="400" cy="300" rx="290" ry="9" fill="rgba(0,0,0,0.6)" filter={`url(#${ids.blur})`} />

        {/* berry 3D offset, as on the favicon */}
        <path d={BODY} fill="#891F5E" transform="translate(10 10)" />
        <path d={BODY} fill="#FF80BF" />

        <g clipPath={`url(#${ids.body})`}>
          <rect x="110" y="216" width="600" height="50" fill={`url(#${ids.dots})`} opacity="0.7" />
          <rect x="130" y="70" width="360" height="5" rx="2.5" fill="rgba(255,255,255,0.4)" />
          {WHEELS.map((cx) => (
            <circle key={cx} cx={cx} cy={262} r={47} fill="#0A0A0C" />
          ))}
        </g>

        {/* cab */}
        <path d={CAB_WINDOW} fill="#0A0A0C" />
        <g clipPath={`url(#${ids.window})`}>
          <line x1="540" y1="76" x2="500" y2="160" stroke="rgba(255,255,255,0.14)" strokeWidth="12" />
        </g>
        <line x1="490" y1="68" x2="490" y2="250" stroke="#891F5E" strokeWidth="2.5" />
        <rect x="506" y="172" width="22" height="6" rx="3" fill="#891F5E" />
        <rect x="604" y="126" width="12" height="24" rx="4" fill="#0A0A0C" />

        {/* lights and bumpers */}
        <rect x="676" y="176" width="16" height="22" rx="6" fill="#FFF3F9" />
        <rect x="110" y="98" width="9" height="42" rx="3" fill="#891F5E" />
        <rect x="650" y="238" width="52" height="24" rx="9" fill="#0A0A0C" />
        <rect x="100" y="238" width="44" height="24" rx="9" fill="#0A0A0C" />

        {/* livery */}
        <image
          href="/brand/snackstation-logo-ink.png"
          x="158"
          y="86"
          width="290"
          height="100"
          preserveAspectRatio="xMinYMid meet"
        />
        <text
          x="162"
          y="205"
          fill="#0A0A0C"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="12"
          fontWeight="700"
          letterSpacing="3"
        >
          SNACKS · DRINKS · GIBRALTAR
        </text>

        {WHEELS.map((cx) => (
          <Wheel key={cx} cx={cx} />
        ))}
      </motion.g>
    </motion.svg>
  );
}
