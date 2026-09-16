"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface GalleryProps {
  onNext: () => void;
}

const galleryItems = [
  {
    image: "/images/ebtisam-01.jpg",
    text: `الصورة دي من الصور اللي أول ما بشوفها...
بلاقي نفسي ببتسم من غير ما أحس. ❤️`,
  },
  {
    image: "/images/ebtisam-02.jpg",
    text: `مش عارف إيه اللي أحلى هنا...
الصورة ولا صاحبة الصورة؟ 👀❤️`,
  },
  {
    image: "/images/ebtisam-03.jpg",
    text: `أهو ده بقى النوع من الصور
اللي يخلي الواحد يقول:
"آه... أنا فعلًا محظوظ إني عرفتك." ❤️`,
  },
  {
    image: "/images/ebtisam-04.jpg",
    text: `كل مرة أشوف الصورة دي
بتأكد إن عندك طريقة غريبة
تخلي أي لحظة تبقى أحلى. ❤️`,
  },
  {
    image: "/images/ebtisam-05.jpg",
    text: `ولسه عندي كلام وصور كتير...
بس نخلي شوية حاجات لوقت تاني. 👀❤️`,
  },
];

export default function Gallery({ onNext }: GalleryProps) {
  return (
    <section className="min-h-[100svh] bg-[#FFF8F8] px-5 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[500px]">
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-12 text-center"
        >
          <div className="text-4xl">📸</div>

          <h1 className="mt-4 text-2xl font-bold text-[#2B2022] sm:text-3xl">
            طب بصي كده... ❤️
          </h1>

          <p className="mt-3 text-base text-[#B76E79]">
            أصل صورة واحدة مش كفاية عليكي 😂
          </p>
        </motion.div>

        <div className="flex flex-col gap-16 sm:gap-20">
          {galleryItems.map((item, index) => (
            <motion.article
              key={item.image}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="flex flex-col items-center"
            >
              <div className="relative aspect-[4/5] w-[90%] overflow-hidden rounded-[2rem] shadow-xl">
                <Image
                  src={item.image}
                  alt={`ابتسام - صورة ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 90vw, 450px"
                  priority={index === 0}
                  className="object-cover"
                />
              </div>

              <p
                dir="rtl"
                className="
                  mt-5
                  w-[90%]
                  text-center
                  text-[17px]
                  leading-8
                  text-[#2B2022]
                  sm:text-lg
                "
              >
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-16 flex justify-center pb-6"
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
              active:scale-95
            "
          >
            طب آخر واحدة... 👀
          </button>
        </motion.div>
      </div>
    </section>
  );
}