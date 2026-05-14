import React from "react";
import AccountHeader from "./AccountHeader";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="pt-20 bg-[#171717]">
      <main className="bg-[#1e1e1f] pt-6.5 pb-37.5 px-20">
        <AccountHeader />
        <div className="">{children}</div>
      </main>
    </div>
  );
}
