"use client";

import { useEffect, useRef } from "react";

export default function ParticleGalaxy() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;
    let burst = false;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle class
    class Particle {
      constructor(x, y, angle, speed, size, color, distance) {
        this.baseX = x;
        this.baseY = y;
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.speed = speed;
        this.size = size;
        this.color = color;
        this.distance = distance;
        this.rotation = 0;
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      update(burstActive) {
        // Spiral galaxy rotation
        this.rotation += this.speed * 0.001;
        
        if (burstActive) {
          // Burst effect - particles explode outward
          this.distance += 2;
          this.opacity -= 0.02;
        } else {
          // Normal rotation
          this.distance = Math.max(this.distance * 0.99, this.distance - 0.5);
          this.opacity = Math.min(this.opacity + 0.01, 0.8);
        }

        // Calculate spiral position
        const spiralAngle = this.angle + this.rotation;
        this.x = this.baseX + Math.cos(spiralAngle) * this.distance;
        this.y = this.baseY + Math.sin(spiralAngle) * this.distance;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color.replace(")", `, ${this.opacity})`).replace("rgb", "rgba");
        ctx.fill();
        
        // Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Create spiral galaxy particles
    const createGalaxy = () => {
      particles = [];
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const arms = 4;
      const particlesPerArm = 1250;

      for (let arm = 0; arm < arms; arm++) {
        for (let i = 0; i < particlesPerArm; i++) {
          const distance = (i / particlesPerArm) * Math.min(canvas.width, canvas.height) * 0.4;
          const angle = (arm / arms) * Math.PI * 2 + (i / particlesPerArm) * Math.PI * 6;
          const spread = (Math.random() - 0.5) * 30;
          
          const x = centerX + Math.cos(angle) * distance;
          const y = centerY + Math.sin(angle) * distance;
          
          // Color gradient from center (accent) to edge (steel)
          const ratio = distance / (Math.min(canvas.width, canvas.height) * 0.4);
          const r = Math.floor(207 + (75 - 207) * ratio);
          const g = Math.floor(220 + (90 - 220) * ratio);
          const b = Math.floor(219 + (102 - 219) * ratio);
          const color = `rgb(${r}, ${g}, ${b})`;
          
          const size = Math.random() * 1.5 + 0.5;
          const speed = 0.5 + Math.random() * 0.5;
          
          particles.push(new Particle(
            centerX,
            centerY,
            angle + spread * 0.01,
            speed,
            size,
            color,
            distance
          ));
        }
      }

      // Add ambient stars
      for (let i = 0; i < 500; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 1 + 0.3;
        const color = "rgb(128, 144, 155)";
        
        particles.push({
          x,
          y,
          size,
          color,
          opacity: Math.random() * 0.5 + 0.2,
          twinkle: Math.random() * 0.02,
          update() {
            this.opacity += this.twinkle;
            if (this.opacity > 0.7 || this.opacity < 0.1) {
              this.twinkle = -this.twinkle;
            }
          },
          draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color.replace(")", `, ${this.opacity})`).replace("rgb", "rgba");
            ctx.fill();
          }
        });
      }
    };

    createGalaxy();

    // Mouse interaction
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleClick = () => {
      burst = true;
      setTimeout(() => {
        burst = false;
        createGalaxy(); // Reset galaxy after burst
      }, 1500);
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleClick);

    // Animation loop
    const animate = () => {
      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height,
        0,
        canvas.width / 2,
        canvas.height,
        canvas.height
      );
      gradient.addColorStop(0, "#0e1116");
      gradient.addColorStop(1, "#000000");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update(burst);
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: "radial-gradient(ellipse at bottom, #0e1116 0%, #000000 100%)" }}
    />
  );
}
