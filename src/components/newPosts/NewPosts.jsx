import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { createComent } from "../../api/api";
import { comentScheme } from "../../schema/comentScheme";
import { toast } from "react-toastify";

const NewPosts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(comentScheme),
  });
  const { mutate } = useMutation({
    mutationFn: createComent,
    onSuccess: () => {
      toast.success("Post added");
    },
    onError: () => {
      toast.error("Something went wrong.");
    },
  });

  const submitForm = (data) => {
    mutate(data);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col items-center shadow-[0px_4px_4px_0px_#00000040] m-auto mt-[50px] rounded-[12px] w-full max-w-[400px] min-h-[565px] font-montserrant"
      >
        <div className="flex flex-col gap-[5px] mb-[20px] w-full max-w-[350px]">
          <label htmlFor="name" className="font-bold text-[12px]">
            Name
          </label>
          <div className="relative">
            <input
              className="shadow px-[41px] border border-[var(--inputBorder)] rounded-[9px] w-full max-w-[350px] min-h-[45px] text-[12px]"
              type="text"
              placeholder="Name"
              id="name"
              {...register("userName")}
            />
            <img
              className="top-[10px] left-[10px] absolute"
              src="./images/svg/nameIcon.svg"
              alt="Email"
            />
            {errors.userName && (
              <p className="text-red-500 text-sm">{errors.userName.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-[5px] w-full max-w-[350px]">
          <label className="font-bold text-[12px]" htmlFor="location">
            country/city
          </label>

          <div className="relative">
            <input
              type="text"
              placeholder="Enter your email"
              id="location"
              className="shadow px-[41px] border border-[var(--inputBorder)] rounded-[9px] w-full max-w-[350px] min-h-[45px] text-[12px]"
            />
            <img
              className="top-[10px] left-[10px] absolute"
              src="./images/svg/Email.svg"
              alt="Email"
            />
          </div>
        </div>
        <div className="mt-[30px] w-full max-w-[350px]">
          <p className="font-bold text-[12px]">
            Share your experience in scaling
          </p>
          <img src="./images/svg/Star Rating.svg" alt="Star Rating" />
        </div>
        <textarea
          className="shadow mt-[30px] p-[10px] border border-[var(--inputBorder)] rounded-[9px] w-full max-w-[350px] min-h-[120px] text-[12px]"
          name="message"
          placeholder="Add your comments..."
          {...register("description")}
        ></textarea>
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
        <div className="flex justify-end mt-[60px] w-full max-w-[350px]">
          <Link to="/product" className="flex">
            <button className="font-bold text-[12px] cursor-pointer">
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            className="flex justify-center items-center bg-[var(--colorBlack)] ml-[40px] rounded-[8px] w-full max-w-[150px] min-h-[45px] font-bold text-[14px] text-[var(--colorWhite)] cursor-pointer"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPosts;
