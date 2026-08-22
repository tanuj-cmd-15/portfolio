"use client";

import { useEffect, useRef } from "react";

export default function ParticleGalaxy() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let time = 0;

    /* ── Noise texture canvas (half-res for perf) ── */
    const noiseCanvas = document.createElement("canvas");
    const noiseCtx = noiseCanvas.getContext("2d");

    const generateNoise = () => {
      const w = noiseCanvas.width;
      const h = noiseCanvas.height;
      const imageData = noiseCtx.createImageData(w, h);
      const d = imageData.data;
      for (let i = 0; i < d.length; i += 4) {
        const v = Math.random() * 255;
        d[i] = v;
        d[i + 1] = v;
        d[i + 2] = v;
        d[i + 3] = 14;
      }
      noiseCtx.putImageData(imageData, 0, 0);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      noiseCanvas.width = Math.ceil(canvas.width / 2);
      noiseCanvas.height = Math.ceil(canvas.height / 2);
      generateNoise();
    };

    resize();
    window.addEventListener("resize", resize);

    /* ── Ambient gradient orbs ── */
    const orbs = [
      { x: 0.10, y: 0.20, r: 0.50, color: [184, 115, 51], opacity: 0.14, sx: 0.25, sy: 0.40 },
      { x: 0.80, y: 0.60, r: 0.40, color: [212, 165, 116], opacity: 0.09, sx: 0.45, sy: 0.25 },
      { x: 0.45, y: 0.02, r: 0.35, color: [140, 90, 40],  opacity: 0.07, sx: 0.60, sy: 0.35 },
      { x: 0.65, y: 0.85, r: 0.30, color: [184, 115, 51], opacity: 0.06, sx: 0.35, sy: 0.55 },
      { x: 0.25, y: 0.55, r: 0.20, color: [220, 140, 60], opacity: 0.05, sx: 0.50, sy: 0.30 },
    ];

    let noiseTimer = 0;

    const animate = () => {
      time += 0.0015;
      noiseTimer++;

      const w = canvas.width;
      const h = canvas.height;

      /* Base fill */
      ctx.fillStyle = "#080808";
      ctx.fillRect(0, 0, w, h);

      /* Draw gradient orbs */
      orbs.forEach((orb, i) => {
        const ox = Math.sin(time * orb.sx + i * 2.1) * 60;
        const oy = Math.cos(time * orb.sy + i * 1.7) * 45;
        const cx = orb.x * w + ox;
        const cy = orb.y * h + oy;
        const r = orb.r * Math.min(w, h);

        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        g.addColorStop(0, `rgba(${orb.color[0]},${orb.color[1]},${orb.color[2]},${orb.opacity})`);
        g.addColorStop(0.35, `rgba(${orb.color[0]},${orb.color[1]},${orb.color[2]},${orb.opacity * 0.4})`);
        g.addColorStop(0.7, `rgba(${orb.color[0]},${orb.color[1]},${orb.color[2]},${orb.opacity * 0.1})`);
        g.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      });

      /* Vignette */
      const vg = ctx.createRadialGradient(w / 2, h / 2, h * 0.25, w / 2, h / 2, h * 0.9);
      vg.addColorStop(0, "rgba(0,0,0,0)");
      vg.addColorStop(0.6, "rgba(0,0,0,0.15)");
      vg.addColorStop(1, "rgba(0,0,0,0.5)");
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, w, h);

      /* Noise overlay (re-generate every ~30 frames for subtle grain animation) */
      if (noiseTimer % 30 === 0) generateNoise();
      ctx.globalAlpha = 0.5;
      ctx.drawImage(noiseCanvas, 0, 0, w, h);
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ pointerEvents: "none" }}
    />
  );
}
