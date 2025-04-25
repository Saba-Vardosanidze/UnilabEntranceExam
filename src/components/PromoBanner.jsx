import { useState } from "react";

const PromoBanner = () => {
  const [promoteOff, setPromoteOff] = useState(true);
  if (!promoteOff) return null;
  return (
    <div className="flex justify-center lg:justify-between items-center bg-[var(--colorBlack)] lg:px-[103px] w-[100%] min-h-[34px] lg:min-h-[38px]">
      <div className="hidden lg:flex"></div>
      <div className="flex items-center">
        <p className="flex mr-[5px] text-[12px] text-[var(--colorWhite)] lg:text-[14px]">
          Sign up and get 20% off to your first order.
        </p>
        <a
          className="border-b border-b-[[var(--colorWhite)]] h-[23px] text-[var(--colorWhite)]"
          href="#"
        >
          Sign Up Now
        </a>
      </div>
      <button
        onClick={() => setPromoteOff(false)}
        className="hidden lg:flex cursor-pointer"
      >
        <img src="./images/svg/xIcon.svg" alt="Off button" />
      </button>
    </div>
  );
};

export default PromoBanner;
