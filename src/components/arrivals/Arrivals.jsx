import { useQuery } from "@tanstack/react-query";

const fetchCards = async () => {
  const response = await fetch(
    "https://6807cb21942707d722dc723c.mockapi.io/t-shirts"
  );
  if (!response.ok) throw new Error("error fetching data");

  return response.json();
};

const Arrivals = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchCards,
  });
  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>Error:{error.message}</p>;

  return (
    <div className="flex flex-col items-center pb-[40px]">
      <div className="flex flex-col items-center lg:px-[100px] pl-[16px] w-full max-w-[1440px]">
        <h2 className="mt-[50px] lg:mt-[72px] mb-[32px] font-bold text-[32px] lg:text-[48px]">
          NEW ARRIVALS
        </h2>
        <div className="flex gap-x-[16px]">
          {data.map((eachElements) => (
            <div>
              <div className="bg-[var(--productContainerColor)] hover:bg-[var(--productContainerColorHover)] rounded-[14px] w-[198px] lg:w-full lg:max-w-[295px] h-[200px] lg:min-h-[298px] transition-all duration-300 ease-in-out cursor-pointer">
                <img src={eachElements.image} alt={eachElements.name} />
              </div>
              <div>
                <p className="mt-[10px] lg:mt-[16px] font-bold lg:text-[20px]">
                  {eachElements.name}
                </p>
                <div className="flex items-center gap-x-[11px] mt-[4px]">
                  <img
                    className="h-[16px] lg:min-h-[18px]"
                    src={eachElements.rateImg}
                    alt={eachElements.name}
                  />
                  <p className="font-normal text-[12px] lg:text-[14px]">
                    {eachElements.rating}
                    <span className="font-normal text-[12px] text-[var(--colorBlackOpacity)] lg:text-[14px]">
                      /5
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-x-[5px]">
                  <p className="font-bold text-[20px] lg:text-[24px]">
                    {eachElements.price}
                  </p>
                  <p className="font-bold text-[20px] text-[var(--oldPrice)] lg:text-[24px] line-through">
                    {eachElements.oldPrice}
                  </p>
                  {eachElements.discount ? (
                    <div className="flex justify-center items-center bg-[var(--dicoundColor)] rounded-[62px] w-[42px] lg:w-[58px] h-[20px] lg:h-[28px] text-[var(--discountTextColor)]">
                      <p className="font-medium text-[10px] lg:text-[12px]">
                        {eachElements.discount}
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
        <button className="flex justify-center items-center hover:bg-[var(--colorBlack)] mt-[24px] lg:mt-[36px] mb-[40px] lg:mb-[64px] border border-[var(--colorBlackborder)] rounded-[62px] w-full max-w-[358px] lg:max-w-[218px] min-h-[46px] lg:min-h-[52px] hover:text-[var(--colorWhite)] transition-all duration-300 ease-in-out cursor-pointer">
          View All
        </button>
        <div className="bg-[var(--colorBlackborder)] mt-[40px] mb-[16px] w-full h-[1px]"></div>
      </div>
    </div>
  );
};

export default Arrivals;
