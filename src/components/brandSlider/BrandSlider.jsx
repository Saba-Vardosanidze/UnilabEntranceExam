import React from "react";
import { motion } from "framer-motion";

const slides = [
  { src: "./images/png/versace.png", alt: "Versace", w: 166, h: 33 },
  { src: "./images/png/zara.png", alt: "Zara", w: 91, h: 38 },
  { src: "./images/png/gucci.png", alt: "Gucci", w: 156, h: 36 },
  { src: "./images/png/prada.png", alt: "Prada", w: 194, h: 32 },
  { src: "./images/png/CarvinClein.png", alt: "Calvin Klein", w: 206, h: 33 },
  { src: "./images/png/versace.png", alt: "Versace", w: 166, h: 33 },
  { src: "./images/png/zara.png", alt: "Zara", w: 91, h: 38 },
];

const BrandSlider = () => {
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className="relative flex items-center bg-black mx-auto w-full lg:h-[122px] overflow-hidden">
      <div className="hidden lg:block">
        <motion.div
          className="flex justify-start gap-[106px]"
          animate={{
            x: ["0%", "-100%"],
            transition: {
              ease: "linear",
              duration: 15,
              repeat: Infinity,
            },
          }}
        >
          {duplicatedSlides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / slides.length}%` }}
            >
              <div className="flex justify-center items-center">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className={`object-contain`}
                  style={{ width: `${slide.w}px`, height: `${slide.h}px` }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="lg:hidden block space-y-8">
        <motion.div
          className="flex justify-start gap-[20px] mt-[40px] mb-[20px]"
          animate={{
            x: ["0%", "-100%"],
            transition: {
              ease: "linear",
              duration: 15,
              repeat: Infinity,
            },
          }}
        >
          {duplicatedSlides.map((slide, index) => (
            <div
              key={`top-${index}`}
              className="flex-shrink-0"
              style={{ width: `${100 / slides.length}%` }}
            >
              <div className="flex justify-center items-center">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className={`object-contain`}
                  style={{ width: `${slide.w}px`, height: `${slide.h}px` }}
                />
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-start gap-[20px] mb-[40px]"
          animate={{
            x: ["-100%", "0%"],
            transition: {
              ease: "linear",
              duration: 15,
              repeat: Infinity,
            },
          }}
        >
          {duplicatedSlides.map((slide, index) => (
            <div
              key={`bottom-${index}`}
              className="flex-shrink-0"
              style={{ width: `${100 / slides.length}%` }}
            >
              <div className="flex justify-center items-center">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className={`object-contain`}
                  style={{ width: `${slide.w}px`, height: `${slide.h}px` }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BrandSlider;
