const Offers = () => {
  return (
    <div className="top-0 left-1/2 absolute flex justify-center px-[16px] lg:px-[100px] w-full -translate-x-1/2 -translate-y-1/2 transform">
      <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center bg-[var(--colorBlack)] px-[23px] lg:px-[64px] py-[30px] lg:py-[0px] rounded-[20px] w-full lg:max-w-[1240px] min-h-[293px] lg:min-h-[180px]">
        <h2 className="lg:max-w-[551px] font-noto font-bold text-[32px] text-[var(--colorWhite)] lg:text-[40px] leading-[35px] lg:leading-[45px]">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className="lg:w-full lg:max-w-[349px]">
          <div className="relative flex mt-[32px] lg:mt-[0px] lg:w-full lg:max-w-[349px]">
            <input
              className="bg-[var(--colorWhite)] px-[48px] rounded-[62px] outline-none w-full max-w-[311px] lg:max-w-[349px] min-h-[42px] lg:min-h-[48px] text-[14px]"
              type="mail"
              placeholder="Enter your email address"
            />
            <img
              className="top-1/2 left-[16px] absolute -translate-y-1/2 transform"
              src="/images/svg/convert.svg"
              alt="convertPhoto"
            />
          </div>
          <button className="bg-[var(--colorWhite)] mt-[12px] px-[48px] rounded-[62px] outline-none w-full max-w-[311px] lg:max-w-[349px] min-h-[42px] lg:min-h-[48px] font-medium text-[14px] cursor-pointer">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
