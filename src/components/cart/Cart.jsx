import { useCart } from "../../context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [pluseItems, setPluseItems] = useState(1);

  const pluse = () => {
    setPluseItems((prev) => prev + 1);
  };
  const minus = () => {
    setPluseItems((prev) => prev - 1);
  };

  if (pluseItems < 0) {
    setPluseItems(0);
  }

  const { cartItems } = useCart();
  return (
    <div className="m-auto px-[16px] lg:px-[100px] max-w-[1440px]">
      <div className="bg-[var(--colorBlackborder)] m-auto h-[1px]"></div>
      <div className="flex lg:flex-row flex-col lg:justify-between items-center gap-[20px] m-auto mt-[24px] w-full max-w-[1440px]">
        <div className="flex flex-col items-center w-full max-w-[358px] lg:max-w-[715px]">
          <div className="w-full max-w-[358px] lg:max-w-[717px]">
            <div className="flex gap-[6px]">
              <div className="flex">
                <Link to="/">
                  <p className="text-[14px] text-[var(--colorBlackOpacity)] lg:text-[16px]">
                    Home
                  </p>
                </Link>
                <img src="images/svg/rightArrow.svg" alt="arrow" />
              </div>
              <div className="flex">
                <p className="text-[14px] text-[var(--colorBlack)] lg:text-[16px]">
                  Cart
                </p>
              </div>
            </div>
            <h2 className="font-noto font-bold text-[32px] lg:text-[40px]">
              Your cart
            </h2>
          </div>
          <div className="border border-[var(--colorBlackborder)] rounded-[20px] w-full lg:w-full max-w-[358px] lg:max-w-[715px] min-h-[50px]">
            {cartItems.length === 0 ? (
              <p>Cart is empty.</p>
            ) : (
              <div>
                {cartItems.map((item) => (
                  <div className="p-[14px]">
                    <div
                      className="flex justify-between mb-[16px] lg:mb-[24px] lg:w-full lg:max-w-[667px]"
                      key={item.id}
                    >
                      <div className="flex justify-center items-center bg-[var(--productContainerColor)] rounded-[9px] w-full max-w-[99px] lg:max-w-[124px] min-h-[99px] lg:min-h-[124px]">
                        <img src={item.image} alt="productImages" />
                      </div>
                      <div className="flex flex-col justify-between w-full lg:w-full max-w-[217px] lg:max-w-[527px] max-h-[118px] lg:max-h-[124px]">
                        <div className="flex justify-between items-center w-full lg:w-full max-w-[217px] lg:max-w-[527px]">
                          <p className="font-bold text-[16px] lg:text-[20px]">
                            {item.name}
                          </p>
                          <img
                            className="max-h-[20px] cursor-pointer"
                            src="/images/svg/trash.svg"
                            alt="trashButton"
                          />
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="font-bold text-[20px] lg:text-[24px]">
                            ${item.price}
                          </p>
                          <div className="flex justify-center items-center gap-[16px] lg:gap-[20px] bg-[var(--grayColorForInput)] rounded-[62px] w-full max-w-[105px] lg:max-w-[126px] h-[31px] min-h-[31px] lg:min-h-[44px]">
                            <button
                              onClick={minus}
                              className="w-[16px] lg:w-[20px] h-[16px] lg:h-[20px] cursor-pointer"
                            >
                              <img
                                src="/images/svg/minus.svg"
                                alt="removeCardButton"
                              />
                            </button>
                            <p className="font-medium text-[14px]">
                              {pluseItems}
                            </p>
                            <button
                              onClick={pluse}
                              className="w-[16px] lg:w-[20px] h-[16px] lg:h-[20px] cursor-pointer"
                            >
                              <img
                                src="/images/svg/pluse.svg"
                                alt="addCardButton"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[var(--colorBlackborder)] w-full h-[1px]"></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-[16px] lg:gap-[24px] p-[20px] border border-[var(--colorBlackborder)] rounded-[20px] w-full max-w-[358px] lg:max-w-[505px] min-h-[390px] lg:min-h-[458px]">
          <p className="font-bold text-[20px] lg:text-[24px]">Order Summary</p>
          <div className="flex flex-col gap-[20px]">
            <div className="flex justify-between">
              <p className="text-[var(--colorBlackOpacity)] lg:text-[20px]">
                Subtotal
              </p>
              <p className="font-bold lg:text-[20px]">$565</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[var(--colorBlackOpacity)] lg:text-[20px]">
                Discount -20%
              </p>
              <p className="font-bold text-[var(--discountTextColor)] lg:text-[20px]">
                -$113
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-[var(--colorBlackOpacity)] lg:text-[20px]">
                Delivery Fee
              </p>
              <p className="font-bold lg:text-[20px]">$15</p>
            </div>
            <div className="bg-[var(--colorBlackborder)] w-full h-[1px]"></div>
          </div>
          <div className="flex flex-col gap-[16px] lg:gap-[20px]">
            <div className="flex justify-between lg:text-[20px]">
              <p>Total</p>
              <p className="font-bold text-[20px] lg:text-[20px]">$467</p>
            </div>
            <div className="flex gap-[12px]">
              <div className="relative w-full">
                <input
                  className="bg-[var(--grayColorForInput)] pl-[46px] rounded-[62px] w-full lg:w-full max-w-[218px] lg:max-w-[326px] min-h-[48px] lg:min-h-[48px]"
                  placeholder="Add promo code"
                  type="text"
                />
                <img
                  className="top-1/2 left-[16px] absolute -translate-y-1/2 transform"
                  src="/images/svg/discountIcon.svg"
                  alt="discountMark"
                />
              </div>
              <button className="flex justify-center items-center bg-[var(--colorBlack)] rounded-[62px] w-full max-w-[88px] lg:max-w-[119px] min-h-[48px] lg:min-h-[48px] text-[var(--colorWhite)]">
                Apply
              </button>
            </div>
            <button className="flex justify-center items-center gap-[12px] bg-[var(--colorBlack)] rounded-[62px] w-full min-h-[54px] text-[var(--colorWhite)] cursor-pointer">
              Go to Checkout
              <img src="/images/svg/whiteArrow.svg" alt="whiteArrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
