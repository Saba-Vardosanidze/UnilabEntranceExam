import { useCart } from "../../context/CartContext";
import { useState } from "react";

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
    <div className="flex flex-col items-center gap-[20px] w-full">
      <div className="border border-[var(--colorBlackborder)] rounded-[20px] w-full max-w-[358px] min-h-[50px]">
        {cartItems.length === 0 ? (
          <p>Cart is empty.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div className="p-[14px]">
                <div className="flex justify-between" key={item.id}>
                  <div className="flex justify-center items-center bg-[var(--productContainerColor)] rounded-[9px] w-full max-w-[99px] min-h-[99px]">
                    <img src={item.image} alt="productImages" />
                  </div>
                  <div className="flex flex-col justify-between w-full max-w-[217px] max-h-[118px]">
                    <div className="flex justify-between items-center w-full max-w-[217px]">
                      <p className="font-bold text-[16px]">{item.name}</p>
                      <img
                        className="max-h-[20px] cursor-pointer"
                        src="/images/svg/trash.svg"
                        alt="trashButton"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-[20px]">${item.price}</p>
                      <div className="flex justify-center items-center gap-[16px] bg-[var(--grayColorForInput)] rounded-[62px] w-full max-w-[105px] h-[31px] min-h-[31px]">
                        <button
                          onClick={minus}
                          className="w-[16px] h-[16px] cursor-pointer"
                        >
                          <img
                            src="/images/svg/minus.svg"
                            alt="removeCardButton"
                          />
                        </button>
                        <p className="font-medium text-[14px]">{pluseItems}</p>
                        <button
                          onClick={pluse}
                          className="w-[16px] h-[16px] cursor-pointer"
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
                <div className="bg-[var(--colorBlackborder)] my-[24px] w-full h-[1px]"></div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="border border-[var(--colorBlackborder)] rounded-[20px] w-full max-w-[358px] min-h-[390px]">
        <p>Order Summary</p>
        <div></div>
      </div>
    </div>
  );
};

export default Cart;
