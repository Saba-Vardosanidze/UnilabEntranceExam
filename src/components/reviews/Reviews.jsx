import { useState, useEffect } from "react";
import { fetchComent } from "../../api/api";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Reviews = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["comments"],
    queryFn: fetchComent,
  });

  const [visibleData, setVisibleData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [initialCount, setInitialCount] = useState(3);

  const [focus, setFocus] = useState("Rating & Reviews");

  useEffect(() => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setInitialCount(6);
    } else {
      setInitialCount(3);
    }
  }, []);

  useEffect(() => {
    if (data) {
      setVisibleData(showAll ? data : data.slice(0, initialCount));
    }
  }, [data, showAll, initialCount]);

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col items-center m-auto mt-[50px] px-[16px] lg:px-[100px] w-full max-w-[1440px]">
      <div className="flex justify-center items-start gap-[45px] mb-[20px] lg:mb-[24px] border-[var(--colorBlackborder)] border-b w-full min-h-[32px]">
        <button
          onClick={() => setFocus("Product Details")}
          className={`cursor-pointer pb-[8px] transition-colors max-w-[33%] w-full ${
            focus === "Product Details"
              ? "border-b-2 border-black font-medium"
              : "text-gray-500"
          }`}
        >
          Product Details
        </button>
        <button
          onClick={() => setFocus("Rating & Reviews")}
          className={` cursor-pointer pb-[8px] transition-colors max-w-[33%] w-full ${
            focus === "Rating & Reviews"
              ? "border-b-2 border-black font-medium"
              : "text-gray-500"
          }`}
        >
          Rating & Reviews
        </button>
        <button
          onClick={() => setFocus("FAQs")}
          className={`cursor-pointer pb-[8px] transition-colors max-w-[33%] w-full ${
            focus === "FAQs"
              ? "border-b-2 border-black font-medium"
              : "text-gray-500"
          }`}
        >
          FAQs
        </button>
      </div>
      <div className="flex justify-between items-center mb-[20px] lg:mb-[24px] w-full">
        <div className="flex items-end gap-[6px]">
          <p className="font-bold text-[20px] lg:text-[24px]">All Reviews</p>
          <p className="text-[14px] text-[var(--colorBlackOpacity)] lg:text-[16px]">
            (451)
          </p>
        </div>
        <div className="flex justify-end items-center gap-[8px] lg:gap-[10px] w-full max-w-[190px] lg:max-w-[354px]">
          <button className="flex justify-center items-center bg-[var(--grayColorForInput)] rounded-full w-[40px] h-[40px] cursor-pointer">
            <img src="/images/svg/filterIcon.svg" alt="filterIcon" />
          </button>
          <div className="hidden lg:flex justify-between items-center bg-[var(--grayColorForInput)] px-[20px] rounded-[62px] w-full max-w-[120px] min-h-[48px] rotate-[62px] cursor-pointer">
            <p className="font-medium">Latest</p>
            <img src="/images/svg/downArow.svg" alt="downArowButton" />
          </div>
          <Link
            to="/createreview"
            className="w-full max-w-[113px] lg:max-w-[166px] min-h-[40px] lg:min-h-[48px]"
          >
            <button className="bg-[var(--colorBlack)] rounded-[62px] w-full max-w-[113px] lg:max-w-[166px] min-h-[40px] lg:min-h-[48px] text-[12px] text-[var(--colorWhite)] lg:text-[16px] cursor-pointer">
              Write a Review
            </button>
          </Link>
        </div>
      </div>
      <div>
        <div className="flex lg:flex flex-wrap lg:flex-wrap gap-[16px] lg:gap-[20px]">
          {visibleData.map((eachElements) => (
            <div
              key={eachElements.id}
              className="m-auto p-[24px] lg:px-[32px] lg:py-[28px] border border-[var(--colorBlackborder)] rounded-[20px] w-full lg:min-w-[241px] max-w-[358px] lg:max-w-[610px] lg:min-h-[224px]"
            >
              <div className="flex justify-between items-center cursor-pointer">
                <img
                  className="min-h-[19px] lg:min-h-[22px]"
                  src={eachElements.rateImg}
                  alt="rateStars"
                />
                <img
                  className="hidden lg:flex"
                  src="/images/svg/moreInfo.svg"
                  alt="moreInfo"
                />
              </div>
              <div className="flex items-center gap-[4px] mt-[12px] lg:mt-[15px]">
                <p className="font-bold lg:text-[20px]">
                  {eachElements.userName}
                </p>
                <img src="/images/svg/verification.svg" alt="verification" />
              </div>
              <p className="mt-[8px] lg:mt-[12px] min-h-[120px] lg:min-h-[66px] text-[14px] text-[var(--colorBlackOpacity)] lg:text-[16px]">
                {eachElements.description}
              </p>
              <p className="mt-[16px] lg:mt-[24px] font-medium text-[14px] text-[var(--colorBlackOpacity)] lg:text-[16px]">
                {eachElements.createdAt}
              </p>
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex justify-center items-center hover:bg-[var(--colorBlack)] m-auto mt-[24px] lg:mt-[36px] mb-[40px] lg:mb-[64px] border border-[var(--colorBlackborder)] rounded-[62px] w-full max-w-[195px] lg:max-w-[230px] min-h-[47px] lg:min-h-[52px] hover:text-[var(--colorWhite)] transition-all duration-300 ease-in-out cursor-pointer"
        >
          {showAll ? "Show Less" : "Load More Reviews"}
        </button>
      </div>
    </div>
  );
};

export default Reviews;
