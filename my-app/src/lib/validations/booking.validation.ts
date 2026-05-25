import z from "zod";

export const bookingValidationSchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string().email("Invalid email"),
  phoneNumber: z.string(),
  city: z.string(),
  address: z.string(),
  region: z.string(),
  country: z.string(),
  specialWishes: z.string(),
  guestArrivalTime: z.date(),
});

export type BookingSchema = z.infer<typeof bookingValidationSchema>;
