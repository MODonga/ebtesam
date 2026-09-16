"use client";

import { motion } from "framer-motion";

interface BirthdayProps {
  onNext: () => void;
}

export default function Birthday({ onNext }: BirthdayProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FFF8F8] flex flex-col items-center justify-center px-6 text-center">
      {/* خلفية متحركة */}
      <motion.div
        className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-[#E8A0A8]/20 blur-3xl"
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
        className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full bg-[#C9A45C]/10 blur-3xl"
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

      {/* المحتوى */}
      <div className="relative z-10 flex flex-col items-center">
        {/* الصورة */}
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
            duration: 1.2,
            ease: "easeOut",
          }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-[#E8A0A8]/20 blur-2xl scale-110" />

          <img
            src="/images/ebtisam-01.jpg"
            alt="ابتسام"
            className="
              relative
              w-64
              h-80
              object-cover
              rounded-[2rem]
              shadow-2xl
            "
          />
        </motion.div>

        {/* الاسم */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: "easeOut",
          }}
          className="mt-7 text-[#B76E79] text-4xl font-bold"
        >
          ابتسام ❤️
        </motion.h1>

        {/* الرسالة */}
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
            duration: 0.8,
            delay: 1.2,
            ease: "easeOut",
          }}
          className="mt-5 text-[#2B2022] text-lg leading-relaxed"
        >
          أيوه...
          <br />
          انتي المقصودة 😂
        </motion.p>

        {/* الزر */}
        <motion.button
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
            duration: 0.8,
            delay: 1.8,
            ease: "easeOut",
          }}
          onClick={onNext}
          className="
            mt-8
            bg-[#E8A0A8]
            text-[#2B2022]
            px-8
            py-4
            rounded-full
            text-lg
            font-semibold
            shadow-lg
            hover:scale-105
            active:scale-95
            transition-transform
          "
        >
          كملي ❤️
        </motion.button>
      </div>
    </section>
  );
}