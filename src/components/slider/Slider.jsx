import useEmblaCarousel from "embla-carousel-react";
import { slider } from "../../data/slider";
import React, { useCallback } from "react";

const Slider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="m-auto mt-[80px] max-w-[1440px]">
      <div className="flex justify-between items-end mb-6 px-[16px] lg:px-[100px]">
        <h2 className="font-bold text-[32px]">OUR HAPPY CUSTOMERS</h2>
        <div className="flex gap-[16px]">
          <button onClick={scrollPrev} className="embla__prev">
            <img
              className="w-[20px] h-[20px] rotate-180 cursor-pointer shrink-0"
              src="./images/svg/arrow.svg"
              alt="Prev Button"
            />
          </button>
          <button onClick={scrollNext} className="embla__next">
            <img
              className="w-[20px] h-[20px] cursor-pointer shrink-0"
              src="./images/svg/arrow.svg"
              alt="Next Button"
            />
          </button>
        </div>
      </div>

      <div className="flex overflow-hidden embla" ref={emblaRef}>
        <div className="flex embla__container">
          {slider.map((eachElement, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] m-auto mr-[16px] px-[24px] py-[24px] border border-[var(--colorBlackborder)] rounded-[20px] w-full max-w-[358px] lg:max-w-[400px] min-h-[186px] lg:min-h-[240px] embla__slide"
            >
              <div>
                <img
                  className="w-full max-w-[118px]"
                  src={eachElement.rate}
                  alt="Customer rate"
                />
                <div className="mt-[12px] mb-[8px]">
                  <div className="flex items-center gap-[4px]">
                    <p className="font-bold">{eachElement.userName}</p>
                    <img
                      src={eachElement.verification}
                      alt="Verification badge"
                    />
                  </div>
                  <p className="text-[14px] text-[var(--colorBlackOpacity)]">
                    {eachElement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
