"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const messages = [
  {
    text: `كل سنة وانتي طيبة يا ابتسام ❤️

ويارب السنة دي تكون بداية
لكل حاجة حلوة نفسك فيها.`,
  },
  {
    text: `عارفة إيه أكتر حاجة بحبها؟

إن وجودك في حياتي بقى من الحاجات
اللي صعب أتخيل أيامي من غيرها. ❤️`,
  },
  {
    text: `مش هقولك إنك أحلى واحدة في الدنيا...

عشان إنتي أصلًا عارفة إني شايفك كده 😂❤️

بس هقولك إنك واحدة من الناس
اللي وجودهم بيفرق فعلًا.`,
  },
  {
    text: `نفسي أشوفك دايمًا مبسوطة،

وأشوف كل حاجة نفسك فيها بتتحقق،

وأفضل موجود في كل لحظة حلوة
جاية في حياتك. ❤️`,
  },
];

interface MessageProps {
  onNext: () => void;
}

export default function Message({ onNext }: MessageProps) {
  const [currentMessage, setCurrentMessage] = useState(0);

  const isLastMessage = currentMessage === messages.length - 1;

  const handleNext = () => {
    if (!isLastMessage) {
      setCurrentMessage((prev) => prev + 1);
    }
  };

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#FFF8F8] px-5 py-8 text-center">
      <motion.div
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8A0A8]/15 blur-3xl"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center">
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <span className="text-4xl">💌</span>

          <p className="mt-3 text-lg font-medium text-[#B76E79]">
            طب اسمعي دي...
          </p>
        </motion.div>

        <div className="flex min-h-[290px] w-full items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMessage}
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
                duration: 0.5,
              }}
              className="w-full rounded-[2rem] bg-white/75 px-5 py-8 shadow-xl backdrop-blur-sm"
            >
              <p
                dir="rtl"
                className="whitespace-pre-line text-[18px] leading-[2] text-[#2B2022]"
              >
                {messages[currentMessage].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-2">
          {messages.map((_, index) => (
            <motion.div
              key={index}
              animate={{
                width: index === currentMessage ? 28 : 8,
                opacity: index === currentMessage ? 1 : 0.35,
              }}
              className="h-2 rounded-full bg-[#B76E79]"
            />
          ))}
        </div>

        {!isLastMessage ? (
          <motion.button
            onClick={handleNext}
            whileTap={{ scale: 0.96 }}
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
            "
          >
            كملي... لسه مخلصتش ❤️
          </motion.button>
        ) : (
          <motion.button
            onClick={onNext}
            whileTap={{ scale: 0.96 }}
            className="
              mt-7
              min-h-12
              rounded-full
              bg-[#E8A0A8]
              px-7
              py-3
              text-base
              font-semibold
              text-[#2B2022]
              shadow-lg
              sm:px-8
              sm:text-lg
            "
          >
            طب تعالي نفتكر شوية ذكريات 📸❤️
          </motion.button>
        )}
      </div>
    </section>
  );
}