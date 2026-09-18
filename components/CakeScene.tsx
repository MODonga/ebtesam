"use client";

import { motion, AnimatePresence } from "framer-motion";

interface CakeSceneProps {
  blown: boolean;
}

export default function CakeScene({
  blown,
}: CakeSceneProps) {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="relative h-[270px] w-[320px] max-w-full">
        {/* Soft glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-[52%] h-[210px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8A0A8]/10 blur-3xl"
          aria-hidden="true"
        />

        {/* Cake */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="absolute bottom-[25px] left-1/2 h-[190px] w-[280px] -translate-x-1/2"
        >
          {/* Cake shadow */}
          <div
            className="absolute bottom-[-8px] left-1/2 h-[18px] w-[235px] -translate-x-1/2 rounded-full bg-[#B76E79]/15 blur-md"
          />

          {/* Bottom plate */}
          <div className="absolute bottom-0 left-1/2 h-[13px] w-[250px] -translate-x-1/2 rounded-[50%] bg-[#F1D7D9] shadow-sm" />

          {/* Bottom cake layer */}
          <div className="absolute bottom-[10px] left-1/2 h-[72px] w-[235px] -translate-x-1/2 overflow-hidden rounded-b-[28px] rounded-t-[12px] border-[3px] border-[#D88993] bg-[#E8A0A8] shadow-lg">
            {/* Cream */}
            <div className="absolute left-0 top-0 h-[18px] w-full bg-[#FFF8F8]" />

            {/* Frosting drips */}
            <div className="absolute left-[15px] top-[12px] h-[25px] w-[30px] rounded-b-[18px] bg-[#FFF8F8]" />
            <div className="absolute left-[65px] top-[12px] h-[30px] w-[28px] rounded-b-[18px] bg-[#FFF8F8]" />
            <div className="absolute right-[62px] top-[12px] h-[28px] w-[30px] rounded-b-[18px] bg-[#FFF8F8]" />
            <div className="absolute right-[15px] top-[12px] h-[23px] w-[28px] rounded-b-[18px] bg-[#FFF8F8]" />

            {/* Cake details */}
            <div className="absolute bottom-[12px] left-[28px] h-[7px] w-[7px] rounded-full bg-[#B76E79]/50" />
            <div className="absolute bottom-[25px] left-[55px] h-[6px] w-[6px] rounded-full bg-[#FFF8F8]/70" />
            <div className="absolute bottom-[14px] right-[42px] h-[7px] w-[7px] rounded-full bg-[#B76E79]/50" />
            <div className="absolute bottom-[28px] right-[72px] h-[6px] w-[6px] rounded-full bg-[#FFF8F8]/70" />
          </div>

          {/* Middle cake layer */}
          <div className="absolute bottom-[70px] left-1/2 h-[58px] w-[205px] -translate-x-1/2 rounded-[16px] border-[3px] border-[#D88993] bg-[#F2B5BA] shadow-md">
            {/* Cream line */}
            <div className="absolute left-0 top-[-2px] h-[16px] w-full rounded-t-[12px] bg-[#FFF8F8]" />

            {/* Frosting */}
            <div className="absolute left-[22px] top-[9px] h-[22px] w-[27px] rounded-b-[16px] bg-[#FFF8F8]" />
            <div className="absolute left-[82px] top-[9px] h-[26px] w-[26px] rounded-b-[16px] bg-[#FFF8F8]" />
            <div className="absolute right-[25px] top-[9px] h-[22px] w-[27px] rounded-b-[16px] bg-[#FFF8F8]" />
          </div>

          {/* Top cake layer */}
          <div className="absolute bottom-[122px] left-1/2 h-[50px] w-[175px] -translate-x-1/2 rounded-[18px] border-[3px] border-[#D88993] bg-[#E8A0A8] shadow-md">
            {/* Cream top */}
            <div className="absolute left-0 top-[-3px] h-[20px] w-full rounded-[50%] bg-[#FFF8F8]" />

            {/* Cream drip */}
            <div className="absolute left-[25px] top-[7px] h-[22px] w-[25px] rounded-b-[16px] bg-[#FFF8F8]" />
            <div className="absolute left-[75px] top-[7px] h-[26px] w-[27px] rounded-b-[17px] bg-[#FFF8F8]" />
            <div className="absolute right-[25px] top-[7px] h-[22px] w-[25px] rounded-b-[16px] bg-[#FFF8F8]" />
          </div>

          {/* Strawberries */}
          <Strawberry
            className="absolute left-[38px] top-[92px] rotate-[-12deg]"
            size="small"
          />

          <Strawberry
            className="absolute right-[38px] top-[91px] rotate-[12deg]"
            size="small"
          />

          <Strawberry
            className="absolute left-1/2 top-[75px] -translate-x-1/2"
            size="medium"
          />

          {/* Gold decoration */}
          <div className="absolute left-[58px] top-[112px] h-[6px] w-[6px] rounded-full bg-[#C9A45C]" />
          <div className="absolute right-[58px] top-[112px] h-[6px] w-[6px] rounded-full bg-[#C9A45C]" />

            {/* Candles */}
            <div className="absolute bottom-[172px] left-1/2 z-20 flex -translate-x-1/2 items-end gap-[18px]">
            <Candle
                blown={blown}
                color="#E8A0A8"
                height={43}
            />

            <Candle
                blown={blown}
                color="#C9A45C"
                height={51}
            />

            <Candle
                blown={blown}
                color="#B76E79"
                height={43}
            />
            </div>
        </motion.div>

        {/* Wind effect */}
        <AnimatePresence>
          {blown && (
            <>
              <motion.div
                initial={{
                  opacity: 0,
                  scaleX: 0.4,
                  x: -20,
                }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scaleX: [0.4, 1.2, 1.5],
                  x: [-20, 10, 35],
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className="pointer-events-none absolute left-[68px] top-[78px] h-[3px] w-[75px] origin-left rounded-full bg-[#B76E79]/25"
              />

              <motion.div
                initial={{
                  opacity: 0,
                  scaleX: 0.3,
                  x: -15,
                }}
                animate={{
                  opacity: [0, 0.5, 0],
                  scaleX: [0.3, 1, 1.3],
                  x: [-15, 8, 28],
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.08,
                  ease: "easeOut",
                }}
                className="pointer-events-none absolute left-[76px] top-[88px] h-[2px] w-[55px] origin-left rounded-full bg-[#B76E79]/20"
              />
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* =========================================================
   Candle
========================================================= */

function Candle({
  blown,
  color,
  height,
}: {
  blown: boolean;
  color: string;
  height: number;
}) {
  return (
    <div
      className="relative w-[15px]"
      style={{
        height: `${height}px`,
      }}
    >
      {/* Flame */}
      <AnimatePresence>
        {!blown && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
              y: 5,
            }}
            animate={{
              opacity: 1,
              scale: [1, 1.08, 0.95, 1.05, 1],
              y: [0, -2, 0, -1, 0],
            }}
            exit={{
              opacity: 0,
              scale: 0.2,
              x: 18,
              y: -3,
              rotate: 25,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-[25px] left-1/2 z-30 h-[24px] w-[15px] -translate-x-1/2"
          >
            {/* Outer flame */}
            <div className="absolute bottom-0 left-1/2 h-[22px] w-[13px] -translate-x-1/2 rounded-[65%_35%_60%_40%] bg-[#FF9D45] shadow-[0_0_12px_rgba(255,157,69,0.65)]" />

            {/* Inner flame */}
            <div className="absolute bottom-[2px] left-1/2 h-[13px] w-[7px] -translate-x-1/2 rounded-[60%_40%_55%_45%] bg-[#FFF3A6]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Smoke */}
      <AnimatePresence>
        {blown && (
          <motion.div
            initial={{
              opacity: 0,
              y: 4,
              scale: 0.4,
            }}
            animate={{
              opacity: [0, 0.65, 0.35, 0],
              y: [-2, -15, -28, -38],
              scale: [0.4, 0.8, 1, 1.25],
              x: [0, -2, 3, -1],
            }}
            transition={{
              duration: 2.1,
              ease: "easeOut",
            }}
            className="pointer-events-none absolute -top-[23px] left-1/2 z-20 h-[42px] w-[20px] -translate-x-1/2"
          >
            <div className="absolute left-1/2 top-0 h-[10px] w-[8px] -translate-x-1/2 rounded-full bg-[#B7B0B2]/45 blur-[2px]" />

            <div className="absolute left-[5px] top-[8px] h-[12px] w-[10px] rounded-full bg-[#B7B0B2]/35 blur-[2px]" />

            <div className="absolute left-[8px] top-[19px] h-[13px] w-[11px] rounded-full bg-[#B7B0B2]/25 blur-[3px]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Wick */}
      <div className="absolute -top-[2px] left-1/2 z-20 h-[5px] w-[2px] -translate-x-1/2 rounded-full bg-[#332A2C]" />

      {/* Candle body */}
      <div
        className="relative h-full w-full overflow-hidden rounded-[5px] border border-black/5 shadow-sm"
        style={{
          background: color,
        }}
      >
        {/* Candle stripes */}
        <div className="absolute left-[3px] top-0 h-full w-[2px] rounded-full bg-white/35" />

        <div className="absolute right-[3px] top-0 h-full w-[2px] rounded-full bg-black/5" />

        {/* Shine */}
        <div className="absolute left-[3px] top-[6px] h-[12px] w-[2px] rounded-full bg-white/50" />
      </div>
    </div>
  );
}

/* =========================================================
   Strawberry
========================================================= */

function Strawberry({
  className,
  size,
}: {
  className?: string;
  size: "small" | "medium";
}) {
  const dimensions =
    size === "small"
      ? "h-[18px] w-[20px]"
      : "h-[23px] w-[25px]";

  return (
    <div
      className={`relative ${dimensions} ${className ?? ""}`}
    >
      {/* Strawberry */}
      <div className="absolute bottom-0 left-1/2 h-[78%] w-[85%] -translate-x-1/2 rounded-[50%_50%_55%_55%] bg-[#C95F6C] shadow-inner">
        {/* Seeds */}
        <span className="absolute left-[4px] top-[5px] h-[2px] w-[2px] rounded-full bg-[#FFE6B0]" />
        <span className="absolute left-[9px] top-[9px] h-[2px] w-[2px] rounded-full bg-[#FFE6B0]" />
        <span className="absolute right-[4px] top-[6px] h-[2px] w-[2px] rounded-full bg-[#FFE6B0]" />
        <span className="absolute left-[6px] top-[14px] h-[2px] w-[2px] rounded-full bg-[#FFE6B0]" />
        <span className="absolute right-[7px] top-[15px] h-[2px] w-[2px] rounded-full bg-[#FFE6B0]" />
      </div>

      {/* Leaves */}
      <div className="absolute left-1/2 top-0 h-[8px] w-[12px] -translate-x-1/2">
        <span className="absolute left-0 top-1 h-[6px] w-[6px] rotate-[-30deg] rounded-tl-full bg-[#7FA66A]" />
        <span className="absolute left-1/2 top-0 h-[7px] w-[6px] -translate-x-1/2 rounded-t-full bg-[#88AD72]" />
        <span className="absolute right-0 top-1 h-[6px] w-[6px] rotate-[30deg] rounded-tr-full bg-[#7FA66A]" />
      </div>
    </div>
  );
}