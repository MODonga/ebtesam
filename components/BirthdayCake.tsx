"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CakeScene from "./CakeScene";

interface BirthdayCakeProps {
  onNext: () => void;
}

export default function BirthdayCake({
  onNext,
}: BirthdayCakeProps) {
  const [blown, setBlown] = useState(false);

  useEffect(() => {
    if (!blown) return;

    const timer = setTimeout(() => {
      onNext();
    }, 3500);

    return () => clearTimeout(timer);
  }, [blown, onNext]);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#FFF8F8] px-5 py-10 text-center">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8A0A8]/15 blur-3xl"
        aria-hidden="true"
      />

      {/* Sparkle */}
      <motion.div
        className="pointer-events-none absolute left-[14%] top-[22%] text-lg text-[#C9A45C]"
        animate={{
          opacity: [0.25, 0.9, 0.25],
          scale: [0.8, 1.15, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ✨
      </motion.div>

      <motion.div
        className="pointer-events-none absolute right-[14%] top-[29%] text-lg text-[#C9A45C]"
        animate={{
          opacity: [0.25, 0.9, 0.25],
          scale: [0.8, 1.15, 0.8],
        }}
        transition={{
          duration: 3.2,
          delay: 0.7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ✨
      </motion.div>

      <div className="relative z-10 flex w-full max-w-md flex-col items-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-lg text-[#B76E79]">
            النهارده يوم مميز... 🎂
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-[#2B2022]">
            عشان كده لازم يكون فيه تورتة ❤️
          </h1>
        </motion.div>

        {/* 3D Cake */}
            <motion.div
            initial={{
                opacity: 0,
                scale: 0.75,
                y: 30,
            }}
            animate={{
                opacity: 1,
                scale: 1,
                y: 0,
            }}
            transition={{
                duration: 0.9,
                delay: 0.35,
                ease: "easeOut",
            }}
            className="relative mt-7 h-[clamp(260px,42vh,360px)] w-full"
            >
            <CakeScene blown={blown} />
            </motion.div>

        {/* Instructions */}
        {!blown ? (
          <>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 1.1,
              }}
              className="mt-1 text-lg leading-8 text-[#2B2022]"
            >
              اتمنى أمنية حلوة...
              <br />
              وبعدين انفخي الشمع 🎂
            </motion.p>

            <motion.button
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 1.5,
              }}
              onClick={() => setBlown(true)}
              whileTap={{ scale: 0.95 }}
              className="mt-6 min-h-12 rounded-full bg-[#E8A0A8] px-8 py-3 text-lg font-semibold text-[#2B2022] shadow-lg shadow-[#E8A0A8]/20 transition-transform"
            >
              انفخي الشمع 🎂
            </motion.button>
          </>
        ) : (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="mt-2"
          >
            <p className="text-2xl font-bold text-[#B76E79]">
              كل سنة وانتي طيبة يا ابتسام ❤️
            </p>

            <p className="mt-3 text-lg leading-8 text-[#2B2022]">
              ويارب أمنيتك تكون
              <br />
              أحلى من كل اللي بتتمنيه. ✨
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}