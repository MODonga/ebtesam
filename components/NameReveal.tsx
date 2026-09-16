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
      }, 1800);

      return () => clearTimeout(timer);
    }
  }, [visibleLetters, onNext]);

  return (
    <section className="min-h-screen bg-[#FFF8F8] flex flex-col items-center justify-center px-6 text-center overflow-hidden">

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="text-[#B76E79] text-xl mb-6"
      >
        الشخص ده...
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
        className="text-[#2B2022] text-2xl font-semibold mb-8"
      >
        اسمها...
      </motion.p>

      <motion.div
        initial={{
          opacity: 0,
          filter: "blur(20px)",
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          delay: 1.6,
          ease: "easeOut",
        }}
        className="min-h-[90px] flex items-center justify-center"
      >
        <h1
          dir="rtl"
          className="text-[#B76E79] text-5xl font-bold tracking-wide"
        >
          {name.slice(0, visibleLetters)}
        </h1>
      </motion.div>

      {visibleLetters === name.length && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.3,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            ease: "backOut",
          }}
          className="mt-6 text-4xl"
        >
          ❤️
        </motion.div>
      )}
    </section>
  );
}