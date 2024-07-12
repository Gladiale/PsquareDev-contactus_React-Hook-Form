import { type SubmitHandler, useForm } from "react-hook-form";
import { type FormInputType } from "../types/types";
import InputBox from "./InputBox";

// 参考
// https://qiita.com/course_k/items/656e8613a189f0a17782

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputType>();

  const onSubmit: SubmitHandler<FormInputType> = (data) => console.log(data);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-[#350e57] sm:p-4">
      <div className="w-full sm:max-w-sm lg:max-w-md 2xl:max-w-lg bg-white sm:shadow-lg sm:rounded-lg px-8 py-5">
        <div className="text-center w-full text-2xl sm:text-3xl font-semibold lg:text-4xl mb-3 text-[#686D76]">
          Contact Us
        </div>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <InputBox text="name" register={register} errors={errors} />
          <InputBox text="email" register={register} errors={errors} />
          <InputBox text="phoneNumber" register={register} errors={errors} />
          <InputBox text="message" register={register} errors={errors} />
          <div className="hover: shadow-form w-full bg-[#350e57] hover:bg-[#572584] py-3 px-8 text-center text-base sm:text-lg font-semibold text-white outline-none">
            <button className="w-full h-full">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
