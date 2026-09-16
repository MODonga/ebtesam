"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function FinalSurprise() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FFF8F8] px-6">
      {/* Background Glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8A0A8]/20 blur-3xl"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Hearts */}
      <motion.div
        className="absolute left-[10%] top-[20%] text-2xl"
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ❤️
      </motion.div>

      <motion.div
        className="absolute right-[10%] top-[30%] text-xl"
        animate={{
          y: [0, 12, 0],
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        💕
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] left-[12%] text-xl"
        animate={{
          y: [0, -10, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ✨
      </motion.div>

      <motion.div
        className="absolute bottom-[25%] right-[12%] text-xl"
        animate={{
          y: [0, 10, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ✨
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center">
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="before"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  ease: "backOut",
                }}
                className="text-5xl"
              >
                ❤️
              </motion.div>

              <h1
                dir="rtl"
                className="
                  mt-8
                  text-3xl
                  font-bold
                  leading-relaxed
                  text-[#2B2022]
                "
              >
                وصلنا للنهاية...
              </h1>

              <p
                dir="rtl"
                className="
                  mt-5
                  text-xl
                  leading-relaxed
                  text-[#2B2022]
                "
              >
                بس قبل ما تمشي ❤️
                <br />
                في حاجة أخيرة.
              </p>

              <motion.button
                onClick={() => setRevealed(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.8,
                }}
                className="
                  mt-10
                  rounded-full
                  bg-[#E8A0A8]
                  px-9
                  py-4
                  text-lg
                  font-semibold
                  text-[#2B2022]
                  shadow-lg
                "
              >
                آخر حاجة 👀
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="after"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex w-full max-w-md flex-col items-center"
            >
              {/* Final Image */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  ease: "backOut",
                }}
                className="
                  w-[90%]
                  overflow-hidden
                  rounded-[2rem]
                  shadow-2xl
                "
              >
                <img
                  src="/images/ebtisam-final.jpg"
                  alt="ابتسام ❤️"
                  className="block aspect-[4/5] w-full object-cover"
                />
              </motion.div>

              {/* Final Message */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                }}
                dir="rtl"
                className="
                  mt-8
                  text-2xl
                  font-semibold
                  leading-relaxed
                  text-[#B76E79]
                "
              >
                كل سنة وانتي في حياتي ❤️
              </motion.p>

              {/* Final Birthday */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: 1.4,
                  ease: "backOut",
                }}
                className="mt-8"
              >
                <p className="text-3xl">🎂</p>

                <h2 className="mt-3 text-2xl font-bold text-[#2B2022]">
                  Happy Birthday
                </h2>

                <p className="mt-2 text-2xl font-bold text-[#B76E79]">
                  Ebtisam ❤️
                </p>
              </motion.div>

              {/* Final Hearts */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0.6, 1],
                }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                }}
                className="mt-6 text-2xl"
              >
                ❤️ ✨ ❤️
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}