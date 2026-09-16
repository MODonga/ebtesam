"use client";

import { motion } from "framer-motion";

interface IntroProps {
  onNext: () => void;
}

export default function Intro({ onNext }: IntroProps) {
  return (
    <section className="min-h-screen bg-[#FFF8F8] flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* النص */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <p className="text-[#B76E79] text-lg mb-3">
          ✨
        </p>

        <h1 className="text-[#2B2022] text-3xl font-bold leading-relaxed">
          في حد النهارده
          <br />
          عيد ميلاده...
        </h1>
      </motion.div>

      {/* الهدية */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.6,
          ease: "easeOut",
        }}
        className="my-10"
      >
        <div className="text-8xl">
          🎁
        </div>
      </motion.div>

      {/* الزر */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.3,
          ease: "easeOut",
        }}
      >
        <button
          onClick={onNext}
          className="
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
          افتحي الهدية 🎁
        </button>
      </motion.div>
    </section>
  );
}