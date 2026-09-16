"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Intro from "@/components/Intro";
import NameReveal from "@/components/NameReveal";
import Birthday from "@/components/Birthday";
import Message from "@/components/Message";
import Gallery from "@/components/Gallery";
import FinalSurprise from "@/components/FinalSurprise";

const imagesToPreload = [
  "/images/ebtisam-01.jpg",
  "/images/ebtisam-02.jpg",
  "/images/ebtisam-03.jpg",
  "/images/ebtisam-04.jpg",
  "/images/ebtisam-05.jpg",
  "/images/ebtisam-final.jpg",
];

const floatingHearts = [
  {
    left: "8%",
    delay: 0,
    duration: 7,
    size: "text-lg",
  },
  {
    left: "22%",
    delay: 2,
    duration: 9,
    size: "text-sm",
  },
  {
    left: "42%",
    delay: 1,
    duration: 8,
    size: "text-xl",
  },
  {
    left: "65%",
    delay: 3,
    duration: 10,
    size: "text-sm",
  },
  {
    left: "82%",
    delay: 1.5,
    duration: 8.5,
    size: "text-lg",
  },
];

const sparkles = [
  {
    left: "12%",
    top: "18%",
    delay: 0,
  },
  {
    left: "85%",
    top: "20%",
    delay: 1.2,
  },
  {
    left: "18%",
    top: "65%",
    delay: 2,
  },
  {
    left: "78%",
    top: "70%",
    delay: 0.8,
  },
  {
    left: "50%",
    top: "12%",
    delay: 1.7,
  },
  {
    left: "55%",
    top: "85%",
    delay: 2.5,
  },
];

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Preload images
  useEffect(() => {
    let loadedImages = 0;

    const finishLoading = () => {
      loadedImages += 1;

      if (loadedImages >= imagesToPreload.length) {
        setIsLoading(false);
      }
    };

    const imageElements = imagesToPreload.map((src) => {
      const image = new Image();

      image.onload = finishLoading;
      image.onerror = finishLoading;

      image.src = src;

      return image;
    });

    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(fallbackTimer);

      imageElements.forEach((image) => {
        image.onload = null;
        image.onerror = null;
      });
    };
  }, []);

  const startExperience = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Music could not start:", error);
      }
    }

    setCurrentStep(1);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;

    const newMutedState = !isMuted;

    audioRef.current.muted = newMutedState;
    setIsMuted(newMutedState);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#FFF8F8]">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              flex-col
              items-center
              justify-center
              bg-[#FFF8F8]
            "
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl"
            >
              ❤️
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="
                mt-6
                text-lg
                font-medium
                text-[#2B2022]
              "
            >
              Loading your surprise...
            </motion.p>

            <motion.div
              className="
                mt-6
                h-1
                w-32
                overflow-hidden
                rounded-full
                bg-[#E8A0A8]/30
              "
            >
              <motion.div
                className="h-full rounded-full bg-[#B76E79]"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Floating Hearts */}
      {!isLoading && (
        <>
          {floatingHearts.map((heart, index) => (
            <motion.div
              key={`heart-${index}`}
              className={`
                pointer-events-none
                fixed
                bottom-[-30px]
                z-[1]
                ${heart.size}
              `}
              style={{
                left: heart.left,
              }}
              initial={{
                y: 0,
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                y: "-110vh",
                opacity: [0, 0.45, 0.3, 0],
                scale: [0.7, 1, 0.85],
              }}
              transition={{
                duration: heart.duration,
                delay: heart.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ❤️
            </motion.div>
          ))}

          {/* Sparkles */}
          {sparkles.map((sparkle, index) => (
            <motion.div
              key={`sparkle-${index}`}
              className="
                pointer-events-none
                fixed
                z-[1]
                text-sm
                text-[#C9A45C]
              "
              style={{
                left: sparkle.left,
                top: sparkle.top,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.6, 1.2, 0.6],
                rotate: [0, 90, 180],
              }}
              transition={{
                duration: 2.8,
                delay: sparkle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ✨
            </motion.div>
          ))}
        </>
      )}

      {/* Background Music */}
      <audio
        ref={audioRef}
        src="/music/birthday.mp3"
        loop
        preload="auto"
      />

      {/* Music Control */}
      {!isLoading && currentStep > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed right-4 top-4 z-50"
        >
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "تشغيل الصوت" : "كتم الصوت"}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white/80
              text-xl
              shadow-lg
              backdrop-blur-sm
              transition-transform
              hover:scale-105
              active:scale-95
            "
          >
            {isMuted ? "🔇" : "🔊"}
          </button>
        </motion.div>
      )}

      {/* Scenes */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentStep}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          {/* Stage 1 - Intro */}
          {currentStep === 0 && (
            <Intro onNext={startExperience} />
          )}

          {/* Stage 2 - Name Reveal */}
          {currentStep === 1 && (
            <NameReveal
              onNext={() => setCurrentStep(2)}
            />
          )}

          {/* Stage 3 - Birthday Image */}
          {currentStep === 2 && (
            <Birthday
              onNext={() => setCurrentStep(3)}
            />
          )}

          {/* Stage 4 - Messages */}
          {currentStep === 3 && (
            <Message
              onNext={() => setCurrentStep(4)}
            />
          )}

          {/* Stage 5 - Gallery */}
          {currentStep === 4 && (
            <Gallery
              onNext={() => setCurrentStep(5)}
            />
          )}

          {/* Stage 6 - Final Surprise */}
          {currentStep === 5 && (
            <FinalSurprise />
          )}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}