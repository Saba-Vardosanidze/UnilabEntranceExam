import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const DressStyle = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      id="brand"
      className="m-auto mt-[50px] lg:mt-[80px] px-[16px] lg:px-[100px] max-w-[1440px]"
    >
      <div className="flex flex-col items-center bg-[var(--heroBgColor)] m-auto px-[20px] lg:px-[0px] pt-[40px] lg:pt-[70px] pb-[27px] lg:pb-[76px] rounded-[20px] overflow-hidden">
        <h2 className="mb-[28px] font-noto font-bold text-[32px] lg:text-[58px] text-center">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="flex flex-wrap justify-center gap-[16px] lg:gap-[20px]">
          <motion.div
            className="relative flex justify-end bg-[var(--colorWhite)] hover:bg-[var(--colorWhiteHover)] rounded-[20px] w-full max-w-[310px] lg:max-w-[407px] h-[190px] lg:min-h-[289px] overflow-hidden cursor-pointer"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Link to="/category">
              <img
                className="h-full"
                src="images/png/Adesigne.png"
                alt="designe"
              />
              <p className="top-[16px] left-[24px] absolute font-bold text-[24px]">
                Casual
              </p>
            </Link>
          </motion.div>
          <motion.div
            className="relative flex justify-end bg-[var(--colorWhite)] hover:bg-[var(--colorWhiteHover)] rounded-[20px] max-w-[310px] lg:max-w-[684px] min-h-[190px] lg:min-h-[289px] overflow-hidden cursor-pointer"
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Link to="/category">
              <img
                className="h-full"
                src="images/png/Bdesigne.png"
                alt="designe"
              />
              <p className="top-[16px] left-[24px] absolute font-bold text-[24px]">
                Formal
              </p>
            </Link>
          </motion.div>
          <motion.div
            className="relative flex justify-end bg-[var(--colorWhite)] hover:bg-[var(--colorWhiteHover)] rounded-[20px] w-full max-w-[310px] lg:max-w-[684px] min-h-[190px] lg:min-h-[289px] overflow-hidden cursor-pointer"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Link to="/category">
              <img
                className="h-full"
                src="images/png/Cdesigne.png"
                alt="designe"
              />
              <p className="top-[16px] left-[24px] absolute font-bold text-[24px]">
                Party
              </p>
            </Link>
          </motion.div>
          <motion.div
            className="relative flex justify-end bg-[var(--colorWhite)] hover:bg-[var(--colorWhiteHover)] rounded-[20px] w-full max-w-[310px] lg:max-w-[407px] h-[190px] lg:min-h-[289px] overflow-hidden cursor-pointer"
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Link to="/cagegory">
              <img
                className="h-full"
                src="images/png/Ddesigne.png"
                alt="designe"
              />
              <p className="top-[16px] left-[24px] absolute font-bold text-[24px]">
                Gym
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
