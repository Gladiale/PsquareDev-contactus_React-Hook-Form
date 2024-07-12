import {
  type ValidationRule,
  type UseFormRegister,
  type FieldErrors,
} from "react-hook-form";
import { customText } from "../helper/customText";
import { FormInputType } from "../types/types";

type PropsType = {
  text: "name" | "email" | "phoneNumber" | "message";
  register: UseFormRegister<FormInputType>;
  errors: FieldErrors<FormInputType>;
};

const InputBox = ({ text, register, errors }: PropsType) => {
  const inputType =
    text === "name" ? "text" : text === "email" ? "email" : "number";

  const patternInfo: ValidationRule<RegExp> | undefined =
    text === "email"
      ? {
          value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          message: "Invalid email address",
        }
      : undefined;

  const minLengthInfo: ValidationRule<number> | undefined =
    text === "phoneNumber"
      ? {
          value: 10,
          message: "Minimum length is 10.",
        }
      : undefined;

  return (
    <div className="mb-3">
      <label htmlFor={text} className="text-sm sm:text-base">
        {customText(text)} <span className="text-red-600">*</span>
      </label>
      {text !== "message" ? (
        <input
          type={inputType}
          id={text}
          {...register(text, {
            required: "入力が必須の項目です",
            pattern: patternInfo,
            minLength: minLengthInfo,
          })}
          placeholder={`Enter your ${
            text.includes("-") ? text.replace("-", " ") : text
          }`}
          className="w-full border border-[#373A40] bg-white py-2 px-4 text-base font-medium text-[#686D76] outline-none focus:border-[#350e57] focus:border-[2px] focus:shadow-md"
        />
      ) : (
        <textarea
          rows={3}
          id={text}
          {...register(text, {
            required: "入力が必須の項目です",
            minLength: {
              value: 10,
              message: "Message is too short.",
            },
            maxLength: {
              value: 200,
              message: "Message is too long.",
            },
          })}
          placeholder="Type your message here"
          className="w-full border border-[#373A40] bg-white py-2 px-4 text-base font-medium text-[#686D76] outline-none focus:border-[#350e57] focus:border-[2px] focus:shadow-md"
        />
      )}
      {errors?.[text] && (
        <p className="text-red-600 mt-1">{errors?.[text]?.message}</p>
      )}
    </div>
  );
};

export default InputBox;
