"use client";
// === components/PixelBackground.tsx ===
import { useEffect, useRef } from "react";

// Simple pixelated animated background (moving blocks)
export default function PixelBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const pixelSize = 12;
    // const numPixelsX = Math.ceil(width / pixelSize);
    // const numPixelsY = Math.ceil(height / pixelSize);
    // Each pixel block has a color and a velocity
    const pixels = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      dx: (Math.random() - 0.5) * 0.6,
      dy: (Math.random() - 0.5) * 0.6,
      color: `hsl(${Math.floor(Math.random() * 360)}, 80%, 60%)`,
      size: pixelSize + Math.random() * 8,
    }));

    function animate() {
      ctx?.clearRect(0, 0, width, height);
      for (const p of pixels) {
        p.x += p.dx;
        p.y += p.dy;
        // Bounce off edges
        if (p.x < 0 || p.x > width - p.size) p.dx *= -1;
        if (p.y < 0 || p.y > height - p.size) p.dy *= -1;
        if (ctx) {
          ctx.fillStyle = p.color;
          ctx.fillRect(Math.floor(p.x), Math.floor(p.y), Math.floor(p.size), Math.floor(p.size));
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    // Handle resize
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      if (typeof animationRef.current === "number") {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Canvas is fixed, covers the whole screen, pointer-events none
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.23,
        imageRendering: "pixelated",
      }}
      aria-hidden="true"
    />
  );
}
