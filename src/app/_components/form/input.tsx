import { forwardRef } from "react";
import clsx from "clsx";

type TextInputProps = {
  label?: string;
  name: string;
  type?: "text" | "email" | "password" | "number" | "tel";
  placeholder?: string;
  helperText?: {
    text?: string;
    type?: "success" | "error";
  };
  required?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  helperTextClassName?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      name,
      type = "text",
      placeholder,
      helperText,
      required = false,
      fullWidth = true,
      disabled = false,
      className,
      labelClassName,
      inputClassName,
      helperTextClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={clsx(
          "mb-3 flex flex-col gap-1",
          {
            "w-full": fullWidth,
            "opacity-60": disabled,
          },
          className,
        )}
      >
        {label && (
          <label
            htmlFor={name}
            className={clsx(
              "text-sm font-medium text-gray-700",
              {
                "after:ml-0.5 after:text-red-500 after:content-['*']": required,
              },
              labelClassName,
            )}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          aria-required={required}
          aria-invalid={helperText?.type === "error"}
          aria-describedby={helperText ? `${name}-description` : undefined}
          className={clsx(
            "input input-bordered",
            {
              "w-full": fullWidth,
              "input-error": helperText?.type === "error",
              "input-success": helperText?.type === "success",
            },
            inputClassName,
          )}
          {...props}
        />
        {helperText?.text && (
          <p
            id={`${name}-description`}
            className={clsx(
              "text-sm",
              {
                "text-green-600": helperText.type === "success",
                "text-red-600": helperText.type === "error",
                "text-gray-500": !helperText.type,
              },
              helperTextClassName,
            )}
          >
            {helperText.text}
          </p>
        )}
      </div>
    );
  },
);

TextInput.displayName = "TextInput";
