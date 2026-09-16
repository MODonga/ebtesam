"use client";

import { motion } from "framer-motion";

interface GalleryProps {
  onNext: () => void;
}

const galleryItems = [
  {
    image: "/images/ebtisam-01.jpg",
    text: "صورة ليها حكاية... ❤️",
  },
  {
    image: "/images/ebtisam-02.jpg",
    text: "ودي كمان... وكل صورة ليها ذكرى مختلفة.",
  },
  {
    image: "/images/ebtisam-03.jpg",
    text: "وفي صور كده الواحد بيبتسم لما يشوفها. ❤️",
  },
  {
    image: "/images/ebtisam-04.jpg",
    text: "ودي واحدة من الصور اللي بحبها جدًا...",
  },
  {
    image: "/images/ebtisam-05.jpg",
    text: "ولسه في صور كتير تستاهل تتحط هنا. ❤️",
  },
];

export default function Gallery({ onNext }: GalleryProps) {
  return (
    <section className="min-h-screen bg-[#FFF8F8] px-5 py-16">
      <div className="mx-auto w-full max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <div className="text-4xl">📸</div>

          <h1 className="mt-5 text-3xl font-bold text-[#2B2022]">
            شوية صور ليكي ❤️
          </h1>

          <p className="mt-3 text-base text-[#B76E79]">
            كل صورة وراها حكاية...
          </p>
        </motion.div>

        {/* Story Gallery */}
        <div className="flex flex-col gap-20">
          {galleryItems.map((item, index) => (
            <motion.article
              key={item.image}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="flex flex-col items-center"
            >
              {/* Image */}
              <motion.div
                whileHover={{
                  scale: 1.015,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="w-[90%] overflow-hidden rounded-[2rem] shadow-xl"
              >
                <img
                  src={item.image}
                  alt={`ابتسام - صورة ${index + 1}`}
                  className="block aspect-[4/5] w-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </motion.div>

              {/* Caption */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                dir="rtl"
                className="
                  mt-6
                  w-[90%]
                  text-center
                  text-lg
                  leading-8
                  text-[#2B2022]
                "
              >
                {item.text}
              </motion.p>
            </motion.article>
          ))}
        </div>

        {/* Continue to Final Surprise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex justify-center pb-10"
        >
          <motion.button
            onClick={onNext}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
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
        </motion.div>
      </div>
    </section>
  );
}