import { useQuery } from "@tanstack/react-query";
import { fetchCards } from "../../api/api";
import { useState } from "react";

const AllProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useQuery({
    queryKey: ["cards"],
    queryFn: fetchCards,
  });

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filterData = data.filter((eachElement) =>
    currentPage === 1 ? eachElement.id <= 9 : eachElement.id > 9
  );

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center px-[16px] lg:px-[100px] w-full max-w-[1440px]">
        <div className="bg-[var(--colorBlackborder)] mb-[24px] w-full h-[1px]"></div>
        <div className="flex flex-wrap justify-center gap-x-[20px] gap-y-[36px] w-full max-w-[925px]">
          {filterData.map((eachElement) => (
            <div
              key={eachElement.id}
              className="max-w-[172px] lg:max-w-[295px]"
            >
              <div className="flex justify-center items-center bg-[var(--productContainerColor)] hover:bg-[var(--productContainerColorHover)] rounded-[14px] w-[172px] lg:w-[295px] h-[174px] lg:min-h-[298px] transition-all duration-300 ease-in-out cursor-pointer">
                <img src={eachElement.image} alt={eachElement.name} />
              </div>
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
                <div className="flex items-center gap-x-[5px] lg:gap-x-[10px]">
                  <p className="font-bold text-[20px] lg:text-[24px]">
                    {eachElement.price}
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
          <div className="bg-[var(--colorBlackborder)] mb-[20px] w-full h-[1px]"></div>
        </div>
        <div className="flex justify-between items-center w-full max-w-[920px]">
          <button className="flex items-center gap-[8px] px-[10px] py-[8px] border border-[var(--colorBlackborder)] rounded-[8px] text-[12px] cursor-pointer">
            <img
              src="./images/svg/arrow.svg"
              className="h-[16px] rotate-180"
              alt="prevButton"
            />
            Previous
          </button>
          <div className="flex gap-[2px]">
            <div
              onClick={() => setCurrentPage(1)}
              className="bg-[var(--pageNumerationColor)] lg:px-[17px] lg:py-[10px] rounded-[8px] cursor-pointer"
            >
              1
            </div>
            <div
              onClick={() => setCurrentPage(2)}
              className="lg:px-[17px] lg:py-[10px] text-[var(--paragraph-color)] cursor-pointer"
            >
              2
            </div>
          </div>
          <button className="flex items-center gap-[8px] px-[10px] py-[8px] border border-[var(--colorBlackborder)] rounded-[8px] text-[12px] cursor-pointer">
            Next
            <img
              src="./images/svg/arrow.svg"
              className="h-[16px]"
              alt="prevButton"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
