"use client";

import InputField from "@/components/InputField";
import MaskInput from "@/components/MaskInput";
import { Text } from "@/components/Text";
import {
  BookingSchema,
  bookingValidationSchema,
} from "@/lib/validations/booking.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { notFound } from "next/navigation";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

type UserProps = {
  user: {
    id: number;
    email: string;
    verificationToken: string;
    resetPasswordToken: string | null;
    password: string;
    name: string | null;
    phoneNumber: string | null;
    dateOfBirth: Date | null;
    isVerify: boolean;
    resetPasswordExpire: Date | null;
    createdAt: Date;
    updatedAt: Date;
  } | null;
};

export default function BookingForm({ user }: UserProps) {
  if (!user) {
    notFound();
  }

  const {
    control,
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingSchema>({
    resolver: zodResolver(bookingValidationSchema),
  });

  useEffect(() => {
    if (user?.name) {
      const parts = user.name.split(" ");

      reset({
        name: parts[0] || "",
        surname: parts.slice(1).join(" ") || "",
      });
    }
  }, [user, reset]);

  const onSubmit = async (data: BookingSchema) => {};
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#171717] mb-7.5 p-15"
    >
      <Text as="h2" color="white" size="md" className="mb-10">
        Enter your data
      </Text>
      <div className="grid grid-cols-2 gap-12.5">
        <div className="flex flex-col gap-10">
          <InputField
            name="name"
            lable="Name"
            placeholder="Name"
            register={register}
            error={errors.name}
            darkThemeInput
          />
          <InputField
            name="email"
            lable="E-mail"
            placeholder="email@gmail.com"
            register={register}
            error={errors.email}
            darkThemeInput
          />
        </div>

        <div className="flex flex-col gap-10">
          <InputField
            name="surname"
            lable="Surname"
            placeholder="Surname"
            register={register}
            error={errors.surname}
            darkThemeInput
          />
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
              <MaskInput
                idName="phoneNumber"
                lable="Phone number"
                mask="+1 (000) 000-00-00"
                placeholder="+1 (709) 123-45-67"
                error={errors.phoneNumber}
                value={field.value ?? ""}
                onChange={field.onChange}
                darkThemeInput
              />
            )}
          />
        </div>
      </div>
    </form>
  );
}
