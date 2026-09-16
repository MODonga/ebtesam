"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const name = "ابتسام";

interface NameRevealProps {
  onNext: () => void;
}

export default function NameReveal({ onNext }: NameRevealProps) {
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLetters((prev) => {
        if (prev >= name.length) {
          clearInterval(timer);
          return prev;
        }

        return prev + 1;
      });
    }, 350);

    return () => clearInterval(timer);
  }, []);

 useEffect(() => {
  if (visibleLetters === name.length) {
    const timer = setTimeout(() => {
      onNext();
    }, 10000);

    return () => clearTimeout(timer);
  }
}, [visibleLetters, onNext]);

  return (
    <section className="flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#FFF8F8] px-6 text-center">
      <div className="flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl text-[#B76E79]"
        >
          طيب... 👀
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="mt-4 text-xl font-semibold text-[#2B2022]"
        >
          إنتي عارفة إحنا هنا عشان مين؟
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.5,
          }}
          className="mt-3 text-base text-[#B76E79]"
        >
          خليني أفكرك...
        </motion.p>

        <div className="mt-8 flex min-h-[90px] items-center justify-center">
          <motion.h1
            initial={{
              opacity: 0,
              filter: "blur(15px)",
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 1.8,
            }}
            dir="rtl"
            className="text-5xl font-bold tracking-wide text-[#B76E79]"
          >
            {name.slice(0, visibleLetters)}
          </motion.h1>
        </div>

        {visibleLetters === name.length && (
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              ease: "backOut",
            }}
            className="mt-5"
          >
            <p className="text-2xl font-semibold text-[#2B2022]">
              أيوه... إنتي يا ابتسام ❤️
            </p>

            <p className="mt-2 text-base text-[#B76E79]">
              متستغربيش... كملي بس 😂
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}