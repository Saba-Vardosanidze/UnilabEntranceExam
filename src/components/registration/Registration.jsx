import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { registrationSchema } from "../../schema/comentScheme";
import { registerUser } from "../../api/api";

const Registration = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      navigate("/complate");
    },
    onError: () => {
      setError("root", { message: "something is wrong" });
    },
  });

  return (
    <div className="flex flex-col items-enter m-auto my-[50px] px-[16px] lg:px-[100px] w-full max-w-[1440px]">
      <div className="m-auto mb-[100px] w-full max-w-[554px]">
        <h2 className="font-bold text-[32px]">Create account</h2>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
      <form
        className="flex flex-col items-center gap-[20px] w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-center gap-[30px] w-full">
          <div className="w-full max-w-[262px]">
            <input
              className="px-[20px] border border-[var(--colorBlackOpacity)] rounded-[5px] w-full max-w-[262px] min-h-[49px]"
              placeholder="First Name"
              type="text"
              {...register("userName")}
            />
            {errors.email && (
              <p className="text-[12px] text-[var(--discountTextColor)]">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="w-full max-w-[262px]">
            <input
              className="px-[20px] border border-[var(--colorBlackOpacity)] rounded-[5px] w-full max-w-[262px] min-h-[49px]"
              placeholder="Last Name"
              type="text"
              {...register("lastName")}
            />
            {errors.email && (
              <p className="text-[12px] text-[var(--discountTextColor)]">
                {errors.email?.message}
              </p>
            )}
          </div>
        </div>
        <div className="w-full max-w-[554px]">
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
        <div className="w-full max-w-[554px]">
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

        <div className="flex gap-[15px] w-full max-w-[554px]">
          <input className="cursor-pointer" type="checkbox" />
          <p className="text-[14px]">
            I agree to DopeSass Terms of service and Privacy policy
          </p>
        </div>
        <button
          className="flex justify-center items-center bg-[var(--colorBlack)] mt-[10px] rounded-[5px] w-full max-w-[554px] min-h-[49px] text-[var(--colorWhite)] cursor-pointer"
          type="submit"
        >
          Create Account
        </button>
      </form>
      <div className="flex items-center gap-[10px] m-auto mt-[30px] w-full max-w-[554px]">
        <div className="bg-[var(--colorBlackOpacity)] w-full h-[1px]"></div>
        <p>or</p>
        <div className="bg-[var(--colorBlackOpacity)] w-full h-[1px]"></div>
      </div>
      <div className="flex flex-col gap-[20px] m-auto mt-[30px] w-full max-w-[554px]">
        <button className="flex justify-center items-center gap-[10px] px-[20px] border rounded-[5px] w-full max-w-[554px] min-h-[49px] cursor-pointer">
          <img src="/images/svg/google.svg" alt="google" />
          <p className="font-semibold">Continue with Google</p>
        </button>
        <button className="flex justify-center items-center gap-[10px] px-[20px] border rounded-[5px] w-full max-w-[554px] min-h-[49px] cursor-pointer">
          <img src="/images/svg/apple.svg" alt="google" />
          <p className="font-semibold">Continue with Apple</p>
        </button>
        {errors.root && (
          <p className="text-[12px] text-[var(--discountTextColor)]">
            Global Error
          </p>
        )}
      </div>
    </div>
  );
};

export default Registration;
