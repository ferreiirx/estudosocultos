"use client";

import { useEffect, useState } from "react";
import { CtaButton } from "./cta-button";
import { cn } from "@/lib/utils";

export function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <a href="#oferta">
        <CtaButton className="text-xl">
          QUERO ACESSO IMEDIATO!
        </CtaButton>
      </a>
    </div>
  );
}
