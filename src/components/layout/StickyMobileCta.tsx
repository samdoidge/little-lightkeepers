import React from "react";
import { Link, useLocation } from "wouter";
import { Phone } from "lucide-react";

export function StickyMobileCta() {
  const [location] = useLocation();

  if (location === "/visit") {
    return null;
  }

  return (
    <>
      {/* Spacer so the fixed bar doesn't cover page content on mobile */}
      <div className="h-20 md:hidden" aria-hidden="true" />
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-border/60 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] px-4 py-3">
        <div className="flex gap-3">
          <Link
            href="/visit"
            className="flex-1 bg-primary text-primary-foreground text-center px-6 py-3 rounded-full font-medium shadow-md shadow-primary/20"
          >
            Book a Visit
          </Link>
          <a
            href="tel:01234567890"
            className="flex items-center justify-center gap-2 bg-white border border-primary/30 text-primary px-6 py-3 rounded-full font-medium"
          >
            <Phone className="w-4 h-4" />
            Call
          </a>
        </div>
      </div>
    </>
  );
}
