"use client";
import { ReactNode } from "react";

import { Navigation } from "@/components/ui/Navigation";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2FFFC] to-[#F2FFFC]/90">
      <Navigation />
      {children}
    </div>
  );
}
