import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StickyMobileCta } from "./StickyMobileCta";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col w-full relative">
      <Navbar />
      <main className="flex-1 flex flex-col w-full">
        {children}
      </main>
      <Footer />
      <StickyMobileCta />
    </div>
  );
}
