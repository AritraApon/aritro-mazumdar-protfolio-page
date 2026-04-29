"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const moveGlow = (e) => {
      gsap.to(glowRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-20 blur-[100px] transition-opacity duration-500"
      style={{
        background: "radial-gradient(circle, #58A6FF 0%, transparent 70%)",
      }}
    />
  );
}
