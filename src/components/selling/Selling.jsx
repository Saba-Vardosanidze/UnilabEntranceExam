import { useQuery } from "@tanstack/react-query";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
import { fetchCards } from "../../api/api";

const Selling = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false });

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchCards,
  });

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div id="sale" className="flex flex-col items-center">
      <div className="flex flex-col items-center lg:px-[100px] pl-[16px] w-full max-w-[1440px]">
        <h2 className="mt-[40px] lg:mt-[64px] mb-[32px] font-noto font-bold text-[32px] lg:text-[48px]">
          top selling
        </h2>
        <div
          className="max-w-[100%] overflow-hidden transition-all duration-500 ease-in-out embla"
          ref={emblaRef}
        >
          <div className="flex gap-x-[16px] embla__container">
            {data
              .filter(
                (eachElement) => eachElement.id >= 5 && eachElement.id <= 8
              )
              .map((eachElement) => (
                <div key={eachElement.id} className="embla__slide">
                  <Link to={`/product/${eachElement.id}`}>
                    <div className="flex justify-center items-center bg-[var(--productContainerColor)] hover:bg-[var(--productContainerColorHover)] rounded-[14px] w-[198px] lg:w-[295px] h-[200px] lg:min-h-[298px] transition-all duration-300 ease-in-out cursor-pointer">
                      <img src={eachElement.image} alt={eachElement.name} />
                    </div>
                  </Link>
                  <div>
                    <p className="mt-[10px] lg:mt-[16px] font-bold lg:text-[20px]">
                      {eachElement.name}
                    </p>
                    <div className="flex items-center gap-x-[11px] mt-[4px]">
                      <img
                        className="h-[16px] lg:min-h-[18px]"
                        src={eachElement.rateImg}
                        alt={eachElement.name}
                      />
                      <p className="font-normal text-[12px] lg:text-[14px]">
                        {eachElement.rating}
                        <span className="font-normal text-[12px] text-[var(--colorBlackOpacity)] lg:text-[14px]">
                          /5
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center gap-x-[5px]">
                      <p className="font-bold text-[20px] lg:text-[24px]">
                        {`$${eachElement.price}`}
                      </p>
                      <p className="font-bold text-[20px] text-[var(--oldPrice)] lg:text-[24px] line-through">
                        {eachElement.oldPrice}
                      </p>
                      {eachElement.discount ? (
                        <div className="flex justify-center items-center bg-[var(--dicoundColor)] rounded-[62px] w-[42px] lg:w-[58px] h-[20px] lg:h-[28px] text-[var(--discountTextColor)]">
                          <p className="font-medium text-[10px] lg:text-[12px]">
                            {eachElement.discount}
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <button className="flex justify-center items-center hover:bg-[var(--colorBlack)] mt-[24px] lg:mt-[36px] mb-[40px] lg:mb-[64px] border border-[var(--colorBlackborder)] rounded-[62px] w-full max-w-[358px] lg:max-w-[218px] min-h-[48px] hover:text-[var(--colorWhite)] transition-all duration-300 ease-in-out cursor-pointer">
          <Link
            to="/category"
            className="flex justify-center items-center px-4 w-full min-h-[48px]"
          >
            View All
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Selling;
