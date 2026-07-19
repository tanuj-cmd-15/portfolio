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
    let burst = false;
    let burstX = 0;
    let burstY = 0;
    let burstParticles = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Star class
    class Star {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.twinkleSpeed = Math.random() * 0.02 + 0.005;
        this.twinkleDirection = Math.random() > 0.5 ? 1 : -1;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.originalOpacity = Math.random() * 0.5 + 0.3;
        this.opacity = this.originalOpacity;
      }

      update() {
        // Slow drift
        this.x += this.vx;
        this.y += this.vy;

        // Twinkling effect
        this.opacity += this.twinkleSpeed * this.twinkleDirection;
        if (this.opacity > 1 || this.opacity < 0.1) {
          this.twinkleDirection *= -1;
        }

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Color variation - mostly white/blue/accent tints
        const colorChoice = Math.floor(this.originalOpacity * 10) % 3;
        let color;
        if (colorChoice === 0) {
          color = `rgba(207, 220, 219, ${this.opacity})`; // accent color
        } else if (colorChoice === 1) {
          color = `rgba(180, 200, 220, ${this.opacity})`; // light blue
        } else {
          color = `rgba(255, 255, 255, ${this.opacity})`; // white
        }
        
        ctx.fillStyle = color;
        ctx.fill();
        
        // Subtle glow for larger stars
        if (this.size > 1.5) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = color;
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
        const speed = Math.random() * 5 + 2;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.size = Math.random() * 3 + 1;
        this.opacity = 1;
        this.decay = Math.random() * 0.02 + 0.01;
        this.color = `rgba(207, 220, 219, ${this.opacity})`; // accent color
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.98; // Slow down
        this.vy *= 0.98;
        this.opacity -= this.decay;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(207, 220, 219, ${this.opacity})`;
        ctx.fill();
        
        // Glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = `rgba(207, 220, 219, ${this.opacity})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      isDead() {
        return this.opacity <= 0;
      }
    }

    // Create stars
    const createStars = () => {
      stars = [];
      for (let i = 0; i < 3000; i++) {
        stars.push(new Star());
      }
    };

    createStars();

    // Click handler for burst effect
    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      burstX = e.clientX - rect.left;
      burstY = e.clientY - rect.top;
      
      // Create burst particles
      burstParticles = [];
      for (let i = 0; i < 100; i++) {
        burstParticles.push(new BurstParticle(burstX, burstY));
      }
      
      burst = true;
    };

    canvas.addEventListener("click", handleClick);

    // Animation loop
    const animate = () => {
      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, "#0e1116");
      gradient.addColorStop(1, "#000000");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      stars.forEach((star) => {
        star.update();
        star.draw();
      });

      // Update and draw burst particles
      if (burst) {
        burstParticles = burstParticles.filter(particle => !particle.isDead());
        burstParticles.forEach((particle) => {
          particle.update();
          particle.draw();
        });
        
        if (burstParticles.length === 0) {
          burst = false;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 cursor-pointer"
      style={{ background: "radial-gradient(ellipse at center, #0e1116 0%, #000000 100%)" }}
    />
  );
}
