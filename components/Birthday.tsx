"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface BirthdayProps {
  onNext: () => void;
}

export default function Birthday({ onNext }: BirthdayProps) {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#FFF8F8] px-5 py-8 text-center">
      <motion.div
        className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#E8A0A8]/20 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-[#C9A45C]/10 blur-3xl"
        animate={{
          x: [0, -25, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="relative w-[78vw] max-w-[300px]"
        >
          <div className="absolute inset-0 scale-105 rounded-[2rem] bg-[#E8A0A8]/20 blur-2xl" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
            <Image
              src="/images/ebtisam-01.jpg"
              alt="ابتسام"
              fill
              sizes="(max-width: 640px) 78vw, 300px"
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
          className="mt-6 text-3xl font-bold text-[#B76E79]"
        >
          أيوه هي دي 😂❤️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.9,
          }}
          className="mt-4 text-lg leading-8 text-[#2B2022]"
        >
          مين غيرك يعني؟ 😂
          <br />
          الموقع ده كله معمول عشان واحدة اسمها ابتسام ❤️
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 1.3,
          }}
          onClick={onNext}
          className="
            mt-7
            min-h-12
            rounded-full
            bg-[#E8A0A8]
            px-8
            py-3
            text-lg
            font-semibold
            text-[#2B2022]
            shadow-lg
            transition-transform
            active:scale-95
          "
        >
          طيب كملي بقى ❤️
        </motion.button>
      </div>
    </section>
  );
}