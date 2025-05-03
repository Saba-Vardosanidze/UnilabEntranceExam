import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center m-auto my-[50px] px-[16px] lg:px-[100px] w-full max-w-[1440px]">
      <div className="mb-[100px] w-full max-w-[554px]">
        <h2 className="font-bold text-[32px]">Welcome Back</h2>
        <p>
          Don’t have an account? <Link to="/registration">Sing Up</Link>
        </p>
      </div>
      <form className="flex flex-col items-center gap-[20px] w-full">
        <input
          className="px-[20px] border border-[var(--colorBlackOpacity)] rounded-[5px] w-full max-w-[554px] min-h-[49px]"
          placeholder="Email"
          type="text"
        />
        <input
          className="px-[20px] border border-[var(--colorBlackOpacity)] rounded-[5px] w-full max-w-[554px] min-h-[49px]"
          placeholder="Password"
          type="text"
        />
        <button className="flex justify-end w-full max-w-[554px] cursor-pointer">
          Forgot Password
        </button>
        <button className="flex justify-center items-center bg-[var(--colorBlack)] mt-[10px] rounded-[5px] w-full max-w-[554px] min-h-[49px] text-[var(--colorWhite)] cursor-pointer">
          Login
        </button>
      </form>
      <div className="flex items-center gap-[10px] mt-[30px] w-full max-w-[554px]">
        <div className="bg-[var(--colorBlackOpacity)] w-full h-[1px]"></div>
        <p>or</p>
        <div className="bg-[var(--colorBlackOpacity)] w-full h-[1px]"></div>
      </div>
      <div className="flex flex-col gap-[20px] mt-[30px] w-full max-w-[554px]">
        <button className="flex justify-center items-center gap-[10px] px-[20px] border rounded-[5px] w-full max-w-[554px] min-h-[49px] cursor-pointer">
          <img src="/images/svg/google.svg" alt="google" />
          <p className="font-semibold">Continue with Google</p>
        </button>
        <button className="flex justify-center items-center gap-[10px] px-[20px] border rounded-[5px] w-full max-w-[554px] min-h-[49px] cursor-pointer">
          <img src="/images/svg/apple.svg" alt="google" />
          <p className="font-semibold">Continue with Apple</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
