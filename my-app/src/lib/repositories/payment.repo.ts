import {
  PaymentProvider,
  PaymentStatus,
} from "../../../generated/prisma/enums";
import { prisma } from "../prisma";

type CreateProps = {
  bookingId: number;
  provider: PaymentProvider;
  status: PaymentStatus;
};

export const dbCreatePayment = async (data: CreateProps) =>
  prisma.payment.create({
    data,
  });
