import React from "react";

const HeroSection = () => {
  return (
    <div className="flex justify-center bg-[var(--heroBgColor)] min-h-[663px]">
      <div className="flex lg:flex-row flex-col px-[16px] lg:px-[80px] max-w-[1440px]">
        <div>
          <h2 className="max-w-[315px] lg:max-w-[577px] text-[var(--font-integralcf)] font-bold text-[36px] lg:text-[64px] leading-[34px] lg:leading-[64px]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>
          <p className="mt-[20px] lg:mt-[32px] mb-[24px] lg:mb-[32px] max-w-[358px] lg:max-w-[545px] font-[var(--font-satoshi)] text-[14px] text-[var(--colorBlackOpacity)] lg:text-[14px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-[var(--colorBlack)] hover:bg-[var(--colorBlackHover)] rounded-[62px] w-full max-w-[358px] lg:max-w-[210px] min-h-[52px] text-[var(--colorWhite)] transition-all duration-300 ease-in-out cursor-pointer">
            Shop Now
          </button>
          <div className="flex flex-wrap lg:justify-start gap-[27px] lg:gap-[32px] mt-[20px] lg:mt-[48px] font-[var(--font-satoshi)]">
            <div>
              <p className="font-bold text-[24px] lg:text-[40px]">200+</p>
              <p className="text-[12px] text-[var(--colorBlackOpacity)] lg:text-[16px]">
                International Brands
              </p>
            </div>
            <div className="bg-[var(--colorBlackborder)] w-[1px] h-[52px] lg:h-[72px]"></div>
            <div>
              <p className="font-bold text-[24px] lg:text-[40px]">2,000+</p>
              <p className="text-[12px] text-[var(--colorBlackOpacity)] lg:text-[16px]">
                High-Quality Products
              </p>
            </div>
            <div className="lg:bg-[var(--colorBlackborder)] lg:w-[1px] lg:h-[72px]"></div>
            <div>
              <p className="font-bold text-[24px] lg:text-[40px]">30,000+</p>
              <p className="text-[12px] text-[var(--colorBlackOpacity)] lg:text-[16px]">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src="images/png/modelExample.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
