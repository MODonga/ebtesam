"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function FinalSurprise() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#FFF8F8] px-5 py-10">
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

      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="before"
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -25,
              }}
              transition={{
                duration: 0.6,
              }}
              className="flex flex-col items-center"
            >
              <div className="text-5xl">👀</div>

              <h1
                dir="rtl"
                className="
                  mt-7
                  text-3xl
                  font-bold
                  leading-relaxed
                  text-[#2B2022]
                "
              >
                خلاص كده؟
                <br />
                فاكرة إنك هتمشي؟
              </h1>

              <p
                dir="rtl"
                className="mt-5 text-lg leading-8 text-[#2B2022]"
              >
                لسه في حاجة صغيرة
                <br />
                كنت مخبيها لآخر لحظة. ❤️
              </p>

              <button
                onClick={() => setRevealed(true)}
                className="
                  mt-8
                  min-h-12
                  rounded-full
                  bg-[#E8A0A8]
                  px-9
                  py-3
                  text-lg
                  font-semibold
                  text-[#2B2022]
                  shadow-lg
                  transition-transform
                  active:scale-95
                "
              >
                وريني بقى 👀❤️
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="after"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="flex w-full flex-col items-center"
            >
              <div className="relative aspect-[4/5] w-[90%] overflow-hidden rounded-[2rem] shadow-2xl">
                <Image
                  src="/images/ebtisam-final.jpg"
                  alt="ابتسام ❤️"
                  fill
                  sizes="(max-width: 640px) 90vw, 450px"
                  priority
                  className="object-cover"
                />
              </div>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.5,
                }}
                className="mt-7 text-2xl font-semibold leading-relaxed text-[#B76E79]"
              >
                كل سنة وانتي قريبة من قلبي ❤️
              </motion.p>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.8,
                }}
                className="mt-4 text-lg leading-8 text-[#2B2022]"
              >
                ويارب أفضل أشوف ضحكتك
                <br />
                في كل سنة جاية. ❤️
              </motion.p>

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
                  duration: 0.7,
                  delay: 1.2,
                }}
                className="mt-7"
              >
                <p className="text-3xl">🎂</p>

                <h2 className="mt-3 text-2xl font-bold text-[#2B2022]">
                  Happy Birthday
                </h2>

                <p className="mt-2 text-2xl font-bold text-[#B76E79]">
                  Ebtisam ❤️
                </p>
              </motion.div>

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 1.8,
                }}
                className="mt-6 text-base leading-7 text-[#B76E79]"
              >
                ولسه عندي كلام كتير...
                <br />
                بس مش كله يتقال هنا 👀❤️
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}