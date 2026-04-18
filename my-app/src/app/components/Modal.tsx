"use client";

import { CrossIcon } from "@/lib/icons/CrossIcon";
import clsx from "clsx";
import { useEffect } from "react";
import { createPortal } from "react-dom";

type Modal = {
  children: React.ReactNode;
  openModal: boolean;
  setOpenModal: (arg: boolean) => void;
};

export default function Modal({ children, openModal, setOpenModal }: Modal) {
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenModal(false);
    };
    if (openModal) {
      document.addEventListener("keydown", onKeyDown);
    } else {
      document.removeEventListener("keydown", onKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openModal, setOpenModal]);

  return createPortal(
    <div
      className={clsx(
        "fixed inset-0 z-50 bg-[#1e1e1f] transition-opacity duration-300",
        openModal ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
      onClick={() => setOpenModal(false)}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <button
          className="absolute top-10 right-10 "
          onClick={() => setOpenModal(false)}
        >
          <CrossIcon />
        </button>
        <div
          onClick={(e) => e.stopPropagation()}
          className={clsx(
            "bg-white z-50 transition-all duration-300",
            openModal ? "opacity-100 scale-100" : "opacity-0 scale-95",
          )}
        >
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
}
