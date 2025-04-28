import React from "react";
import { motion } from "framer-motion";

const slides = [
  { src: "./images/png/versace.png", alt: "Versace", w: 166, h: 33 },
  { src: "./images/png/zara.png", alt: "Zara", w: 91, h: 38 },
  { src: "./images/png/gucci.png", alt: "Gucci", w: 156, h: 36 },
  { src: "./images/png/zara.png", alt: "Zara", w: 91, h: 38 },
  { src: "./images/png/prada.png", alt: "Prada", w: 194, h: 32 },
  { src: "./images/png/zara.png", alt: "Zara", w: 91, h: 38 },
  { src: "./images/png/CarvinClein.png", alt: "Calvin Klein", w: 206, h: 33 },
  { src: "./images/png/zara.png", alt: "Zara", w: 91, h: 38 },
  { src: "./images/png/versace.png", alt: "Versace", w: 166, h: 33 },
  { src: "./images/png/zara.png", alt: "Zara", w: 91, h: 38 },
];

const duplicatedSlides = [...slides, ...slides];

const generateSizeClasses = (w, h) => {
  return `w-[${w}px] h-[${h}px] object-contain`;
};

const MotionSlider = ({ reverse = false, gap = "gap-[36px]" }) => (
  <motion.div
    className={`flex ${gap}`}
    animate={{
      x: reverse ? ["-100%", "0%"] : ["0%", "-100%"],
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
        className="flex flex-shrink-0 justify-center items-center"
        style={{ width: `${100 / slides.length}%` }}
      >
        <img
          src={slide.src}
          alt={slide.alt}
          className={generateSizeClasses(slide.w, slide.h)}
        />
      </div>
    ))}
  </motion.div>
);

const BrandSlider = () => {
  return (
    <div className="relative flex items-center bg-black mx-auto w-full lg:h-[122px] overflow-hidden">
      <div className="hidden lg:flex w-full">
        <MotionSlider gap="gap-[106px]" />
      </div>

      <div className="lg:hidden flex flex-col space-y-8 w-full">
        <MotionSlider gap="gap-[20px]" />
        <MotionSlider gap="gap-[20px]" reverse />
      </div>
    </div>
  );
};

export default BrandSlider;
