import React from "react";
import { motion } from "framer-motion";

const slides = [
  {
    src: "./images/png/versace.png",
    alt: "Versace",
    w: 166,
    h: 33,
    mobileScale: 1.8,
  },
  { src: "./images/png/zara.png", alt: "Zara", w: 91, h: 38, mobileScale: 1.8 },
  {
    src: "./images/png/gucci.png",
    alt: "Gucci",
    w: 156,
    h: 36,
    mobileScale: 1.8,
  },
  { src: "./images/png/zara.png", alt: "Zara", w: 91, h: 38, mobileScale: 1.8 },
  {
    src: "./images/png/prada.png",
    alt: "Prada",
    w: 194,
    h: 32,
    mobileScale: 1.8,
  },
  { src: "./images/png/zara.png", alt: "Zara", w: 91, h: 38, mobileScale: 1.8 },
  {
    src: "./images/png/CarvinClein.png",
    alt: "Calvin Klein",
    w: 206,
    h: 33,
    mobileScale: 1.8,
  },
  { src: "./images/png/zara.png", alt: "Zara", w: 91, h: 38, mobileScale: 1.8 },
  {
    src: "./images/png/versace.png",
    alt: "Versace",
    w: 166,
    h: 33,
    mobileScale: 1.8,
  },
  { src: "./images/png/zara.png", alt: "Zara", w: 91, h: 38, mobileScale: 1.8 },
];

const duplicatedSlides = [...slides, ...slides];

const MotionSlider = ({ reverse = false, gap = "gap-9", isMobile = false }) => (
  <motion.div
    className={`flex ${gap} items-center`}
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
        className={`flex-shrink-0 flex justify-center items-center ${
          isMobile ? "h-[63px]" : ""
        }`}
        style={{ width: `${100 / slides.length}%` }}
      >
        <img
          src={slide.src}
          alt={slide.alt}
          className="object-contain"
          style={{
            width: isMobile
              ? `${slide.w * slide.mobileScale}px`
              : `${slide.w}px`,
            height: isMobile
              ? `${slide.h * slide.mobileScale}px`
              : `${slide.h}px`,
          }}
        />
      </div>
    ))}
  </motion.div>
);

const BrandSlider = () => {
  return (
    <div className="relative flex items-center bg-black w-full h-[146px] lg:h-[122px] overflow-hidden">
      <div className="hidden lg:flex w-full h-full">
        <MotionSlider gap="gap-[106px]" />
      </div>

      <div className="lg:hidden flex flex-col justify-center space-y-5 w-full h-full">
        <MotionSlider gap="gap-5" isMobile />
        <MotionSlider gap="gap-5" reverse isMobile />
      </div>
    </div>
  );
};

export default BrandSlider;
