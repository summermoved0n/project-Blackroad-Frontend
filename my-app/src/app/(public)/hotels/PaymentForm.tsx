"use client";

import { Button } from "@/components/Button";
import { handleApiError } from "@/lib/utility/handleApiError";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const elementOptions = {
  style: {
    base: {
      color: "#ffffff",
      fontSize: "16px",
      "::placeholder": {
        color: "#777777",
      },
    },
    invalid: {
      color: "#ef4444",
    },
  },
};

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const cardElement = elements!.getElement(CardNumberElement);

      const result = await stripe!.confirmCardPayment("clientSecret", {
        payment_method: {
          card: cardElement!,
          billing_details: {
            name: "name",
            email: "email",
            phone: "phone",
          },
        },
      });

      if (result.error) {
        toast.error(result.error.message || "Payment failed");
        return;
      }

      if (result.paymentIntent?.status === "succeeded") {
        toast.success("Payment success");
        router.replace(
          `/payment/success?payment_intent=${result.paymentIntent.id}`,
        );
        return;
      }

      toast.error("Payment was not completed");
    } catch (error) {
      handleApiError(error);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-[2fr] gap-7.5">
        <div>
          <label className="text-white">Card number</label>
          <div className="border border-neutral-700 p-4">
            <CardNumberElement options={elementOptions} />
          </div>
        </div>

        <div>
          <label className="text-white">Expiration date</label>
          <div className="border border-neutral-700 p-4">
            <CardExpiryElement options={elementOptions} />
          </div>
        </div>

        <div>
          <label className="text-white">Security code</label>
          <div className="border border-neutral-700 p-4">
            <CardCvcElement options={elementOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
