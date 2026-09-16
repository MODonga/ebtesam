"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const messages = [
  {
    text: "كل سنة وانتي طيبة يا ابتسام ❤️",
  },
  {
    text: `أتمنى السنة الجديدة من عمرك
تكون أحلى من كل اللي فات...`,
  },
  {
    text: `وتفضلي دايمًا مبسوطة...
وتحققي كل حاجة نفسك فيها ❤️`,
  },
  {
    text: `وتفضلي دايمًا الشخص الجميل
اللي وجوده بيخلّي الدنيا أحلى ❤️`,
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
    <section className="relative min-h-screen overflow-hidden bg-[#FFF8F8] flex items-center justify-center px-6 text-center">
      {/* Background Glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8A0A8]/15 blur-3xl"
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

      {/* Floating Hearts */}
      <motion.div
        className="absolute left-[10%] top-[20%] text-xl"
        animate={{
          y: [0, -12, 0],
          opacity: [0.3, 0.8, 0.3],
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
        className="absolute right-[10%] top-[30%] text-lg"
        animate={{
          y: [0, 10, 0],
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
        className="absolute bottom-[20%] left-[15%] text-lg"
        animate={{
          y: [0, -8, 0],
          opacity: [0.2, 0.7, 0.2],
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
        className="absolute bottom-[25%] right-[15%] text-lg"
        animate={{
          y: [0, 8, 0],
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ✨
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex w-full max-w-md flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-4xl">💌</span>

          <p className="mt-4 text-lg font-medium text-[#B76E79]">
            رسالة ليكي...
          </p>
        </motion.div>

        {/* Message Card */}
        <div className="flex min-h-[220px] w-full items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMessage}
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -25,
                scale: 0.96,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="w-full rounded-[2rem] bg-white/70 px-6 py-8 shadow-xl backdrop-blur-sm"
            >
              <p
                dir="rtl"
                className="whitespace-pre-line text-xl leading-[2] text-[#2B2022]"
              >
                {messages[currentMessage].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress */}
        <div className="mt-6 flex gap-2">
          {messages.map((_, index) => (
            <motion.div
              key={index}
              animate={{
                width: index === currentMessage ? 28 : 8,
                opacity: index === currentMessage ? 1 : 0.35,
              }}
              transition={{ duration: 0.3 }}
              className="h-2 rounded-full bg-[#B76E79]"
            />
          ))}
        </div>

        {/* Button */}
        {!isLastMessage ? (
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            className="
              mt-8
              rounded-full
              bg-[#E8A0A8]
              px-8
              py-4
              text-lg
              font-semibold
              text-[#2B2022]
              shadow-lg
            "
          >
            كملي ❤️
          </motion.button>
        ) : (
          <motion.button
            onClick={onNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{
              opacity: 0,
              y: 15,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              mt-8
              rounded-full
              bg-[#E8A0A8]
              px-8
              py-4
              text-lg
              font-semibold
              text-[#2B2022]
              shadow-lg
            "
          >
            شوفي الصور كمان 📸
          </motion.button>
        )}
      </div>
    </section>
  );
}