"use client";

import { useEffect, useRef } from "react";

export default function ParticleGalaxy() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let stars = [];
    let burstParticles = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    };

    // Star class - elegant and subtle
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.vx = (Math.random() - 0.5) * 0.1;
        this.vy = (Math.random() - 0.5) * 0.1;
        this.baseOpacity = Math.random() * 0.4 + 0.3;
        this.opacity = this.baseOpacity;
        this.twinkleSpeed = Math.random() * 0.015 + 0.005;
        this.twinklePhase = Math.random() * Math.PI * 2;
      }

      update() {
        // Subtle drift
        this.x += this.vx;
        this.y += this.vy;

        // Smooth twinkling with sine wave
        this.twinklePhase += this.twinkleSpeed;
        this.opacity = this.baseOpacity + Math.sin(this.twinklePhase) * 0.3;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Vibrant gradient stars
        const colorPhase = this.twinklePhase;
        const r = 0 + Math.sin(colorPhase) * 100;
        const g = 217 + Math.sin(colorPhase + 2) * 38;
        const b = 255;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
        ctx.fill();
        
        // Enhanced glow for larger stars
        if (this.size > 1) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${this.opacity * 0.8})`;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    }

    // Burst particle class
    class BurstParticle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 1;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.size = Math.random() * 2.5 + 0.5;
        this.opacity = 1;
        this.decay = Math.random() * 0.015 + 0.01;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.96;
        this.vy *= 0.96;
        this.opacity -= this.decay;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
        gradient.addColorStop(0, `rgba(0, 217, 255, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(199, 125, 255, ${this.opacity * 0.8})`);
        gradient.addColorStop(1, `rgba(255, 110, 199, ${this.opacity * 0.5})`);
        ctx.fillStyle = gradient;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `rgba(0, 217, 255, ${this.opacity})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      isDead() {
        return this.opacity <= 0;
      }
    }

    // Create fewer, more elegant stars
    const createStars = () => {
      stars = [];
      const starCount = Math.floor((canvas.width * canvas.height) / 8000); // Dynamic based on screen size
      const maxStars = 200; // Cap at 200 stars
      const finalCount = Math.min(starCount, maxStars);
      
      for (let i = 0; i < finalCount; i++) {
        stars.push(new Star());
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Global click handler for burst effect (works even when clicking on content)
    const handleClick = (e) => {
      const burstX = e.clientX;
      const burstY = e.clientY;
      
      // Create elegant burst at click position
      for (let i = 0; i < 50; i++) {
        burstParticles.push(new BurstParticle(burstX, burstY));
      }
    };

    // Listen to document clicks to catch all clicks
    document.addEventListener("click", handleClick);

    // Smooth animation loop
    const animate = () => {
      // Elegant dark gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) * 0.8
      );
      gradient.addColorStop(0, "#0a0e12");
      gradient.addColorStop(0.5, "#050709");
      gradient.addColorStop(1, "#000000");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      // Update and draw burst particles
      burstParticles = burstParticles.filter(particle => !particle.isDead());
      burstParticles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: "#000000", pointerEvents: "none" }}
    />
  );
}
