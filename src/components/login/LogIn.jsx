import { Link } from "react-router-dom";
import { loginSchema } from "../../schema/comentScheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { lgoinUser } from "../../api/api";

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: lgoinUser,
    onSuccess: () => {
      navigate("/");
    },
    onError: () => {
      setError("root", { message: "something is wrong" });
    },
  });
  const onSubmit = (data) => {
    mutate(data);
  };
  return (
    <div className="flex flex-col items-center m-auto my-[50px] px-[16px] lg:px-[100px] w-full max-w-[1440px]">
      <div className="mb-[100px] w-full max-w-[554px]">
        <h2 className="font-bold text-[32px]">Welcome Back</h2>
        <p>
          Don’t have an account? <Link to="/registration">Sing Up</Link>
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-[20px] w-full"
      >
        <div className="flex justify-center gap-[30px] w-full">
          <input
            className="px-[20px] border border-[var(--colorBlackOpacity)] rounded-[5px] w-full max-w-[554px] min-h-[49px]"
            placeholder="Email"
            type="text"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-[12px] text-[var(--discountTextColor)]">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="flex justify-center gap-[30px] w-full">
          <input
            className="px-[20px] border border-[var(--colorBlackOpacity)] rounded-[5px] w-full max-w-[554px] min-h-[49px]"
            placeholder="Password"
            type="text"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-[12px] text-[var(--discountTextColor)]">
              {errors.password?.message}
            </p>
          )}
        </div>

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
        <button
          type="submit"
          className="flex justify-center items-center gap-[10px] px-[20px] border rounded-[5px] w-full max-w-[554px] min-h-[49px] cursor-pointer"
        >
          <img src="/images/svg/apple.svg" alt="google" />
          <p className="font-semibold">Continue with Apple</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
