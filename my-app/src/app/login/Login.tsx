"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Modal from "@/components/Modal";
import LoginForm from "../(auth)/login/LoginForm";

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/";
  console.log("from", from);
  const [openModal, setOpenModal] = React.useState(true);

  useEffect(() => {
    if (!openModal) {
      router.push(from);
    }
  }, [openModal, from, router]);

  return (
    <section>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <LoginForm />
        <button
          className="text-white"
          onClick={() => {
            ((document.cookie = "token=; max-age=0; path=/"),
              setOpenModal(false));
          }}
        >
          Close
        </button>
      </Modal>
    </section>
  );
}
