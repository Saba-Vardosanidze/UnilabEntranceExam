import { useState } from "react";
import { choseColor } from "../../data/choseColor";
import { chooseSize } from "../../data/choseColor";
import { Link } from "react-router-dom";
const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [addItem, setAddItem] = useState(0);

  const pluseItem = () => {
    setAddItem(addItem + 1);
  };

  const minus = () => {
    setAddItem(addItem - 1);
  };
  if (addItem < 0) {
    setAddItem(0);
  }
  return (
    <div className="px-[16px]">
      <div className="bg-[var(--colorBlackborder)] mt-[24px] mb-[24px] w-full h-[1px]"></div>
      <div className="flex gap-[6px] my-[22px]">
        <div className="flex">
          <Link to="/">
            <p className="text-[14px] text-[var(--colorBlackOpacity)]">Home</p>
          </Link>
          <img src="images/svg/rightArrow.svg" alt="arrow" />
        </div>
        <div className="flex">
          <p className="text-[14px] text-[var(--colorBlackOpacity)]">Shop</p>
          <img src="images/svg/rightArrow.svg" alt="arrow" />
        </div>
        <div className="flex">
          <p className="text-[14px] text-[var(--colorBlackOpacity)]">Men</p>
          <img src="images/svg/rightArrow.svg" alt="arrow" />
        </div>
        <div className="flex">
          <p className="text-[14px] text-[var(--colorBlack)]">T-shirts</p>
          <img src="images/svg/rightArrow.svg" alt="arrow" />
        </div>
      </div>
      <div>
        <div className="bg-[var(--productContainerColor)] rounded-[20px] w-full max-w-[358px] min-h-[290px]"></div>
        <div className="flex gap-[12px] mt-[12px]">
          <div className="bg-[var(--productContainerColor)] rounded-[20px] w-full max-w-[111px] min-h-[106px] cursor-pointer"></div>
          <div className="bg-[var(--productContainerColor)] rounded-[20px] w-full max-w-[111px] min-h-[106px] cursor-pointer"></div>
          <div className="bg-[var(--productContainerColor)] rounded-[20px] w-full max-w-[111px] min-h-[106px] cursor-pointer"></div>
        </div>
      </div>
      <div>
        <div className="mt-[20px]">
          <p className="mt-[10px] lg:mt-[16px] font-bold text-[24px] lg:text-[20px]">
            One Life Graphic T-shirt
          </p>
          <div className="flex items-center gap-x-[11px] mt-[12px]">
            <img
              className="h-[16px] lg:min-h-[18px]"
              src="./images/png/Frame 10.png"
              alt=""
            />
            <p className="font-normal text-[12px] lg:text-[14px]">
              4.5
              <span className="font-normal text-[12px] text-[var(--colorBlackOpacity)] lg:text-[14px]">
                /5
              </span>
            </p>
          </div>
          <div className="flex items-center gap-x-[10px] mt-[12px]">
            <p className="font-bold text-[24px] lg:text-[24px]">$260</p>
            <p className="font-bold text-[24px] text-[var(--oldPrice)] lg:text-[24px] line-through">
              $300
            </p>
            {/* {eachElement.discount ? (
              <div className="flex justify-center items-center bg-[var(--dicoundColor)] rounded-[62px] w-[62px] lg:w-[58px] h-[31px] lg:h-[28px] text-[var(--discountTextColor)]">
                <p className="font-medium text-[14px] lg:text-[12px]">-40%</p>
              </div>
            ) : (
              ""
            )} */}
          </div>
          <p className="mt-[20px] text-[14px] text-[var(--colorBlackOpacity)]">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
        </div>
        <div className="bg-[var(--colorBlackborder)] mt-[24px] mb-[24px] w-full h-[1px]"></div>
        <div>
          <p className="text-[14px] text-[var(--colorBlackOpacity)]">
            Select Colors
          </p>
          <div className="flex gap-[12px] mt-[16px]">
            {choseColor.map((eachElement) => (
              <div
                key={eachElement.id}
                className={`${eachElement.color} rounded-full w-[39px] h-[39px] cursor-pointer relative`}
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
        <div className="bg-[var(--colorBlackborder)] mt-[24px] mb-[24px] w-full h-[1px]"></div>
        <div>
          <p className="text-[14px] text-[var(--colorBlackOpacity)]">
            Choose Size
          </p>
          <div className="flex gap-[8px] mt-[16px] transition-all">
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
        <div className="bg-[var(--colorBlackborder)] mt-[24px] mb-[24px] w-full h-[1px]"></div>
        <div className="flex gap-[12px]">
          <div className="flex justify-center items-center gap-[16px] bg-[var(--grayColorForInput)] rounded-[62px] w-full max-w-[110px] min-h-[44px]">
            <button
              onClick={minus}
              className="w-[20px] h-[20px] cursor-pointer"
            >
              <img src="./images/svg/minus.svg" alt="removeCardButton" />
            </button>
            <p className="font-medium text-[14px]">{addItem}</p>
            <button
              onClick={pluseItem}
              className="w-[20px] h-[20px] cursor-pointer"
            >
              <img src="./images/svg/pluse.svg" alt="addCardButton" />
            </button>
          </div>
          <button className="bg-[var(--colorBlack)] rounded-[62px] w-full max-w-[236px] min-h-[44px] text-[var(--colorWhite)] cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
