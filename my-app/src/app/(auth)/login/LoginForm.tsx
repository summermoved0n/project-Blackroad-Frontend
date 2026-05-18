"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/Button";
import {
  LoginSchema,
  loginValidationSchema,
} from "@/lib/validations/auth.validation";
import InputField from "@/components/InputField";
import InputPassword from "@/components/InputPassword";

export default function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginValidationSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      await axios.post("/api/auth/login", data);
      router.replace("/tours");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-7.5"
    >
      <InputField
        name="email"
        lable="E-mail"
        placeholder="email@gmail.com"
        register={register}
        error={errors.email}
      />

      <InputPassword
        name="password"
        lable="Password"
        register={register}
        error={errors.password}
      />

      <Button variant="primary" type="submit">
        Login
      </Button>
    </form>
  );
}
