"use client";

import { motion } from "framer-motion";

interface IntroProps {
  onNext: () => void;
}

export default function Intro({ onNext }: IntroProps) {
  return (
    <section className="flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#FFF8F8] px-6 text-center">
      <div className="flex w-full max-w-md flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-[#B76E79]">✨ عندي حاجة ليكي...</p>

          <h1 className="mt-4 text-3xl font-bold leading-relaxed text-[#2B2022]">
            استني بس... 👀
            <br />
            في حاجة صغيرة معمولة عشانك ❤️
          </h1>
        </motion.div>

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
          <div className="text-8xl">🎁</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.3,
          }}
        >
          <button
            onClick={onNext}
            className="
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
              hover:scale-105
              active:scale-95
            "
          >
            افتحيها بقا 🎁
          </button>
        </motion.div>
      </div>
    </section>
  );
}