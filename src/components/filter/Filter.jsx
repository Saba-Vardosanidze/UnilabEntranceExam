import { Link } from "react-router-dom";
import {
  chooseSize,
  categories,
  dressStyle,
  dreesColors,
} from "../../data/choseColor";
import PriceRangeSlider from "../PriceRangeSlider/PriceRangeSlider";
import { useState } from "react";

const Filter = ({ onTypeSelect }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeClick = (type) => {
    const newType = type.toLowerCase();
    setSelectedType(newType);
    if (onTypeSelect) {
      onTypeSelect(newType);
    }
  };

  return (
    <div className="lg:flex flex-col w-full max-w-[295px]">
      <div className="px-[24px] py-[20px] border border-[var(--colorBlackborder)] rounded-[20px] w-full max-w-[295px]">
        <div className="flex justify-between items-center mb-[24px]">
          <p className="font-bold text-[20px]">Filters</p>
          <img src="./images/svg/filter2.svg" alt="filter" />
        </div>
        <div className="bg-[var(--colorBlackborder)] w-full h-[1px]"></div>
        <div className="flex flex-col gap-[20px] my-[24px]">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`flex justify-between items-center h-[16px] ${
                selectedType === category.label.toLowerCase()
                  ? "text-[var(--colorBlack)]"
                  : "text-[var(--colorBlackOpacity)]"
              } hover:text-[var(--colorBlack)] transition-all duration-300 ease-in cursor-pointer`}
              onClick={() => handleTypeClick(category.label)}
            >
              <p>{category.label}</p>
              <img src="images/svg/rightArrow.svg" alt="arrow" />
            </div>
          ))}
        </div>
        <div className="bg-[var(--colorBlackborder)] w-full h-[1px]"></div>
        <div className="mt-[24px]">
          <p className="mb-[20px] font-bold text-[20px]">Price</p>
          <PriceRangeSlider />
        </div>
        <div className="bg-[var(--colorBlackborder)] my-[24px] w-full h-[1px]"></div>
        <div>
          <p className="mb-[20px] font-bold text-[20px]">Colors</p>
          <div className="flex flex-wrap gap-[15px] mt-[20px] ]">
            {dreesColors.map((eachElement) => (
              <div
                key={eachElement.id}
                className={`${eachElement.color} rounded-full lg:w-[37px] lg:h-[37px] cursor-pointer relative`}
                onClick={() => setSelectedColor(eachElement.id)}
              >
                {selectedColor === eachElement.id && (
                  <img
                    src="./images/svg/choseColormark.svg"
                    alt="selected"
                    className="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[var(--colorBlackborder)] my-[24px] w-full h-[1px]"></div>
        <div>
          <p className="mb-[20px] font-bold text-[20px]">Size</p>
          <div className="flex flex-wrap gap-[8px]">
            {chooseSize.map((eachElement) => (
              <div
                key={eachElement.id}
                className={`px-[20px] py-[10px] rounded-[62px] cursor-pointer ${
                  selectedSize === eachElement.id
                    ? "bg-[var(--colorBlack)]"
                    : "bg-[var(--grayColorForInput)]"
                }`}
                onClick={() => setSelectedSize(eachElement.id)}
              >
                <p
                  className={`text-[14px] ${
                    selectedSize === eachElement.id
                      ? "text-[var(--colorWhite)]"
                      : "text-[var(--colorBlackOpacity)]"
                  }`}
                >
                  {eachElement.size}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[var(--colorBlackborder)] my-[24px] w-full h-[1px]"></div>
        <div>
          <p className="mb-[20px] font-bold text-[20px]">Dress Style</p>
          <div className="flex flex-col gap-[20px] my-[24px]">
            {dressStyle.map((category, index) => (
              <div
                key={index}
                className="flex justify-between items-center h-[16px] text-[var(--colorBlackOpacity)] hover:text-[var(--colorBlack)] transition-all duration-300 ease-in cursor-pointer"
              >
                <p>{category.label}</p>
                <img src="images/svg/rightArrow.svg" alt="arrow" />
              </div>
            ))}
          </div>
          <button className="bg-[var(--colorBlack)] rounded-[62px] w-full max-w-[247px] min-h-[48px] font-medium text-[14px] text-[var(--colorWhite)] cursor-pointer">
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
