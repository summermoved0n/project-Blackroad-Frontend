"use client";

import React from "react";
import { useRouter } from "next/navigation";
import LoginForm from "./LoginForm";
import Modal from "@/components/Modal";

export default function Login() {
  const router = useRouter();

  const [openModal, setOpenModal] = React.useState(true);

  return (
    <section>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <div className="p-4">
          <div className="pt-50">
            <p className="text-white">GLAD TO WELCOME YOU AGAIN!</p>
            <p className="text-white">
              Don`t have an account?{" "}
              <button
                type="button"
                onClick={() => {
                  router.push("/signup");
                }}
              >
                Register
              </button>
            </p>
          </div>
          <LoginForm />
        </div>
      </Modal>
    </section>
  );
}
