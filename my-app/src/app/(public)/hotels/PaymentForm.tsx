"use client";

import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

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
