import { useState } from "react";
import { Link } from "react-router-dom";

const PromoBanner = () => {
  const [promoteOff, setPromoteOff] = useState(true);
  if (!promoteOff) return null;
  return (
    <div className="flex justify-center bg-[var(--colorBlack)] w-full">
      <div className="flex justify-center lg:justify-between items-center mx-w-[1440px]flex lg:px-[103px] w-full max-w-[1440px] min-h-[34px] lg:min-h-[38px]">
        <div className="hidden lg:flex"></div>
        <div className="flex items-center">
          <p className="flex mr-[5px] text-[12px] text-[var(--colorWhite)] lg:text-[14px]">
            Sign up and get 20% off to your first order.
          </p>
          <Link
            to="/registration"
            className="border-b border-b-[[var(--colorWhite)]] h-[23px] text-[var(--colorWhite)]"
            href="#"
          >
            Sign Up Now
          </Link>
        </div>
        <button
          onClick={() => setPromoteOff(false)}
          className="hidden lg:flex cursor-pointer"
        >
          <img src="/images/svg/whiteXicon.svg" alt="Off button" />
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
