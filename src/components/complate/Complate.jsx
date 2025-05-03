import { Link } from "react-router-dom";

const Complate = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center gap-[20px] mt-[154px] w-full max-w-[554px]">
        <img src="/images/svg/verificationIcon.svg" alt="verificationIcon" />
        <p className="font-semibold text-[20px]">Sign Up successfully</p>
        <Link className="w-full max-w-[554px] min-h-[49px]" to="/login">
          <button className="flex justify-center items-center bg-[var(--colorBlack)] mt-[10px] rounded-[5px] w-full max-w-[554px] min-h-[49px] text-[var(--colorWhite)] cursor-pointer">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Complate;
