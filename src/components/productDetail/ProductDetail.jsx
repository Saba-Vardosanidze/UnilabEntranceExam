import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCards } from "../../api/api";
import { choseColor, chooseSize } from "../../data/choseColor";
import { useCart } from "../../context/CartContext";

const ProductDetail = () => {
  const { addCart } = useCart();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: fetchCards,
  });

  const addCardItem = () => {
    addCart(card);
  };

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [addItem, setAddItem] = useState(1);
  const [gatheringprice, setGatheringPrice] = useState(0);

  const card = data?.find((eachElement) => eachElement.id === Number(id));

  useEffect(() => {
    if (card) {
      setGatheringPrice(card.price * addItem);
    }
  }, [card, addItem]);

  useEffect(() => {
    if (!isLoading && !isError && data && !card) {
      navigate("/not-found", { replace: true });
    }
  }, [card, data, isLoading, isError, navigate]);

  if (isLoading) return <p>Loading ...</p>;
  if (isError) return <p>Error</p>;
  if (!card) return null;

  const pluseItem = () => {
    setAddItem(addItem + 1);
  };

  const minus = () => {
    setAddItem((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className="m-auto px-[16px] lg:px-[100px] w-full max-w-[1440px]">
      <div className="bg-[var(--colorBlackborder)] mb-[24px] w-full h-[1px]"></div>
      <div className="flex gap-[6px] my-[22px]">
        <div className="flex">
          <Link to="/">
            <p className="text-[14px] text-[var(--colorBlackOpacity)]">Home</p>
          </Link>
          <img src="/images/svg/rightArrow.svg" alt="arrow" />
        </div>
        <div className="flex">
          <p className="text-[14px] text-[var(--colorBlackOpacity)]">Shop</p>
          <img src="/images/svg/rightArrow.svg" alt="arrow" />
        </div>
        <div className="flex">
          <p className="text-[14px] text-[var(--colorBlackOpacity)]">Men</p>
          <img src="/images/svg/rightArrow.svg" alt="arrow" />
        </div>
        <div className="flex">
          <p className="text-[14px] text-[var(--colorBlack)]">T-shirts</p>
          <img src="/images/svg/rightArrow.svg" alt="arrow" />
        </div>
      </div>
      <div className="lg:flex items-center gap-[40px]">
        <div className="lg:flex lg:flex-row-reverse items-center gap-[14px] w-full max-w-[610px]">
          <div className="flex justify-center items-center bg-[var(--productContainerColor)] rounded-[20px] w-full max-w-[358px] lg:max-w-[444px] min-h-[290px] lg:min-h-[530px]">
            <img
              className="min-h-[290px] lg:min-h-[430px]"
              src={card.image}
              alt="exampleT-shirt"
            />
          </div>
          <div className="flex lg:flex-col gap-[12px] lg:gap-[14px] mt-[12px] lg:mt-[0px] w-full lg:max-w-[152px]">
            <div className="bg-[var(--productContainerColor)] hover:border rounded-[20px] w-full max-w-[111px] lg:max-w-[152px] min-h-[106px] lg:min-h-[167px] cursor-pointer">
              <img src="/images/png/t-shirtExampleC.png" alt="exampleT-shirt" />
            </div>
            <div className="bg-[var(--productContainerColor)] hover:border rounded-[20px] w-full max-w-[111px] lg:max-w-[152px] min-h-[106px] lg:min-h-[167px] cursor-pointer">
              <img src="/images/png/t-shirtExampleB.png" alt="exampleT-shirt" />
            </div>
            <div className="bg-[var(--productContainerColor)] hover:border rounded-[20px] w-full max-w-[111px] lg:max-w-[152px] min-h-[106px] lg:min-h-[167px] cursor-pointer">
              <img src="/images/png/t-shirtExampleA.png" alt="exampleT-shirt" />
            </div>
          </div>
        </div>
        <div>
          <div className="mt-[20px] lg:mt-[0px]">
            <p className="font-noto font-bold text-[24px] lg:text-[40px]">
              {card.name}
            </p>
            <div className="flex items-center gap-x-[11px] lg:gap-x-[16px] mt-[12px] lg:mt-[14px]">
              <img
                className="h-[16px] lg:h-[24px] lg:min-h-[18px]"
                src={card.rateImg}
                alt="rate"
              />
              <p className="font-normal text-[14px] lg:text-[16px]">
                {card.rating}
                <span className="font-normal text-[14px] text-[var(--colorBlackOpacity)] lg:text-[16px]">
                  /5
                </span>
              </p>
            </div>
            <div className="flex items-center gap-x-[10px] mt-[12px] lg:mt-[14px]">
              <p className="font-bold text-[24px] lg:text-[32px]">
                {`$${gatheringprice}`}
              </p>
              <p className="font-bold text-[24px] text-[var(--oldPrice)] lg:text-[32px] line-through">
                {card.oldPrice}
              </p>
            </div>
            <p className="mt-[20px] text-[14px] text-[var(--colorBlackOpacity)] lg:text-[16px]">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
          </div>
          <div className="bg-[var(--colorBlackborder)] mt-[24px] mb-[24px] w-full h-[1px]"></div>
          <div>
            <p className="text-[14px] text-[var(--colorBlackOpacity)] lg:text-[16px]">
              Select Colors
            </p>
            <div className="flex gap-[12px] lg:gap-[16px] mt-[16px]">
              {choseColor.map((eachElement) => (
                <div
                  key={eachElement.id}
                  className={`${eachElement.color} rounded-full w-[39px] lg:w-[37px] lg:h-[37px] h-[39px] cursor-pointer relative`}
                  onClick={() => setSelectedColor(eachElement.id)}
                >
                  {selectedColor === eachElement.id && (
                    <img
                      src="/images/svg/choseColormark.svg"
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
            <p className="text-[14px] text-[var(--colorBlackOpacity)] lg:text-[16px]">
              Choose Size
            </p>
            <div className="flex gap-[8px] mt-[16px]">
              {chooseSize
                .filter((eachElement) => eachElement.id <= 4)
                .map((eachElement) => (
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
          <div className="flex gap-[12px] lg:gap-[20px]">
            <div className="flex justify-center items-center gap-[16px] lg:gap-[38px] bg-[var(--grayColorForInput)] rounded-[62px] w-full max-w-[110px] lg:max-w-[170px] h-[52px] min-h-[44px]">
              <button
                onClick={minus}
                className="w-[20px] lg:w-[24px] h-[20px] lg:h-[24px] cursor-pointer"
              >
                <img src="/images/svg/minus.svg" alt="removeCardButton" />
              </button>
              <p className="font-medium text-[14px] lg:text-[16px]">
                {addItem}
              </p>
              <button
                onClick={pluseItem}
                className="w-[20px] lg:w-[24px] h-[20px] lg:h-[24px] cursor-pointer"
              >
                <img src="/images/svg/pluse.svg" alt="addCardButton" />
              </button>
            </div>
            <button
              onClick={addCardItem}
              className="bg-[var(--colorBlack)] rounded-[62px] w-full max-w-[236px] lg:max-w-[400px] min-h-[44px] lg:min-h-[52px] text-[14px] text-[var(--colorWhite)] lg:text-[16px] cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
