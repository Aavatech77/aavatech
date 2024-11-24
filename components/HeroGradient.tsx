"use client";
import React, { useEffect, useMemo, useRef } from "react";
import { usePathname } from "next/navigation";

interface Dot {
  x: number;
  y: number;
  size: number;
  color: string;
}

interface HeroGradientProps {
  children: React.ReactNode;
}

export const HeroGradient: React.FC<HeroGradientProps> = ({ children }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const pathname = usePathname();
  const colors: string[] = useMemo(
    () => ["#eee", "#26f4ff", "#00ff80", "#FBA51A"],
    []
  );

  useEffect(() => {
    const hero = heroRef.current;
    const canvas = canvasRef.current;
    if (!canvas || !hero) return;

    const resizeCanvas = (): void => {
      if (!canvas) return;
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
    };
    resizeCanvas();

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const createDots = (): Dot[] => {
      return Array.from(
        { length: 60 },
        (): Dot => ({
          x: Math.floor(Math.random() * canvas.width),
          y: Math.floor(Math.random() * canvas.height),
          size: Math.random() * 3,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      );
    };

    dotsRef.current = createDots();

    const drawDots = (): void => {
      if (!ctx) return;
      dotsRef.current.forEach((dot: Dot) => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    drawDots();

    const handleMouseMove = (e: MouseEvent): void => {
      if (!ctx || !canvas) return;

      const rect = canvas.getBoundingClientRect();
      const mouse = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();

      dotsRef.current.forEach((dot: Dot) => {
        const distance = Math.sqrt(
          (mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2
        );

        if (distance < 200) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    };

    const handleMouseOut = (): void => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();
    };

    const handleResize = (): void => {
      if (!ctx || !canvas) return;
      resizeCanvas();
      dotsRef.current = createDots();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("resize", handleResize);

    // Initial setup
    handleResize();

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname, colors]); // Re-run when route changes

  return (
    <div
      ref={heroRef}
      className="bg-main-gradient min-h-screen grid place-items-center py-20 text-white hero relative"
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
        aria-hidden="true"
      />
      <div className="container flex flex-col-reverse justify-center md:flex-row md:justify-start items-center relative z-10">
        {children}
      </div>
    </div>
  );
};
