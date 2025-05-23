import { useQuery } from "@tanstack/react-query";
import { fetchCards } from "../../api/api";
import { useState } from "react";
import Filter from "../filter/Filter";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const AllProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedType, setSelectedType] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["cards"],
    queryFn: fetchCards,
  });

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filterData = data.filter((eachElement) => {
    const pageFilter =
      currentPage === 1 ? eachElement.id <= 9 : eachElement.id > 9;
    if (!selectedType) return pageFilter;

    return (
      pageFilter &&
      eachElement.type.toLowerCase().startsWith(selectedType.toLowerCase())
    );
  });

  return (
    <div className="flex flex-col m-auto px-[16px] lg:px-[100px] w-full max-w-[1440px]">
      <div className="bg-[var(--colorBlackborder)] mb-[24px] w-full h-[1px]"></div>
      <div className="flex justify-between">
        <div className="hidden lg:flex flex-col">
          <div className="flex gap-[6px] mb-[24px]">
            <div className="flex">
              <Link to="/">
                <p className="text-[14px] text-[var(--colorBlackOpacity)]">
                  Home
                </p>
              </Link>
              <img src="images/svg/rightArrow.svg" alt="arrow" />
            </div>
            <div className="flex">
              <p className="text-[14px] text-[var(--colorBlack)]">Casual</p>
            </div>
          </div>
          <div className="hidden lg:flex">
            <Filter onTypeSelect={setSelectedType} />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-[10px] gap-y-[36px] lg:gap-x-[20px] lg:mt-[46px] w-full max-w-[925px]">
          <div className="flex justify-between items-center lg:items-end w-full">
            <p className="font-bold text-[24px] lg:text-[32px]">Casual</p>
            <div className="flex items-center gap-[8px]">
              <p className="text-[14px] text-[var(--colorBlackOpacity)] lg:text-[16px]">
                Showing {filterData.length} of {data.length} Products
              </p>
              <div className="lg:flex gap-[4px]">
                <p className="hidden lg:flex text-[14px] text-[var(--colorBlackOpacity)] lg:text-[16px]">
                  Sort by:
                </p>
                <div className="hidden lg:flex gap-[4px]">
                  <p className="font-bold">Most Popular</p>
                  <img src="./images/svg/downArow.svg" alt="ArrowIcon" />
                </div>
                <div className="lg:hidden fex">
                  <button
                    onClick={toggleFilter}
                    className="flex justify-center items-center bg-[var(--grayColorForInput)] rounded-full w-[40px] h-[40px] cursor-pointer"
                  >
                    <img src="./images/svg/filterIcon.svg" alt="filterIcon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {filterData.map((eachElement) => (
            <div
              key={eachElement.id}
              className="max-w-[172px] lg:max-w-[295px]"
            >
              <Link to={`/product/${eachElement.id}`}>
                <div className="flex justify-center items-center bg-[var(--productContainerColor)] hover:bg-[var(--productContainerColorHover)] rounded-[14px] w-[172px] lg:w-[295px] h-[174px] lg:min-h-[298px] transition-all duration-300 ease-in-out cursor-pointer">
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
                <div className="flex items-center gap-x-[5px] lg:gap-x-[10px]">
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
          <div className="bg-[var(--colorBlackborder)] w-full h-[1px]"></div>
          <div className="flex justify-between items-center w-full max-w-[920px]">
            <button
              onClick={() => setCurrentPage(1)}
              className="flex items-center gap-[8px] px-[10px] lg:px-[14px] py-[8px] lg:py-[8px] border border-[var(--colorBlackborder)] rounded-[8px] text-[12px] cursor-pointer"
            >
              <img
                src="./images/svg/arrow.svg"
                className="h-[16px] rotate-180"
                alt="prevButton"
              />
              Previous
            </button>
            <div className="flex gap-[2px]">
              <button
                onClick={() => setCurrentPage(1)}
                className={`${
                  currentPage === 1
                    ? "bg-[var(--pageNumerationColor)] text-[var(--colorBlack)]"
                    : "text-[var(--paragraph-color)]"
                } rounded-[8px] px-[15px] py-[8px] cursor-pointer lg:px-[17px] lg:py-[10px]`}
              >
                1
              </button>
              <button
                onClick={() => setCurrentPage(2)}
                className={`${
                  currentPage === 2
                    ? "bg-[var(--pageNumerationColor)] text-[var(--colorBlack)]"
                    : "text-[var(--paragraph-color)]"
                } rounded-[8px] px-[15px] py-[8px] cursor-pointer lg:px-[17px] lg:py-[10px]`}
              >
                2
              </button>
            </div>
            <button
              onClick={() => setCurrentPage(2)}
              className="flex items-center gap-[8px] px-[10px] lg:px-[14px] py-[8px] lg:py-[8px] border border-[var(--colorBlackborder)] rounded-[8px] text-[12px] cursor-pointer"
            >
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
      {isFilterOpen && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.3 }}
          className="lg:hidden z-50 fixed inset-0 flex justify-center bg-white overflow-y-auto"
        >
          <Filter />
        </motion.div>
      )}
    </div>
  );
};

export default AllProduct;
