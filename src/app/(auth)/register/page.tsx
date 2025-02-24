"use client";

import { TextInput } from "~/app/_components/form/input";
import { type SubmitHandler, useForm } from "react-hook-form";
import {
  registerSchema,
  type RegisterFormSchema,
} from "~/server/api/routers/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerSchema),
  });
  const onSubmit: SubmitHandler<RegisterFormSchema> = (data) => {
    //! TODO: implement register user logic
  };

  return (
    <article className="flex h-screen content-center items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xs">
        <h1 className="mb-2 text-2xl font-semibold text-primary">
          Register New User
        </h1>
        <TextInput
          label="Full Name"
          placeholder="John Doe"
          helperText={
            errors.name && {
              text: errors.name?.message,
              type: "error",
            }
          }
          {...register("name")}
        />
        <TextInput
          type="email"
          label="Email"
          placeholder="aiden.htut@gmail.com"
          helperText={
            errors.email && {
              text: errors.email.message,
              type: "error",
            }
          }
          {...register("email")}
        />
        <TextInput
          type="password"
          label="Password"
          placeholder="Keep it secret"
          helperText={
            errors.password && {
              text: errors.password.message,
              type: "error",
            }
          }
          {...register("password")}
        />
        <TextInput
          type="password"
          label="Confirm Password"
          placeholder="Repeat the secret"
          helperText={
            errors.confirmPassword && {
              text: errors.confirmPassword.message,
              type: "error",
            }
          }
          {...register("confirmPassword")}
        />
        <button className="btn btn-primary w-full" type="submit">
          Register
        </button>
      </form>
    </article>
  );
};
export default RegisterPage;
