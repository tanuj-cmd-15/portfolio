"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import * as THREE from "three";

// Animated spiral galaxy particles
function SpiralGalaxy() {
  const pointsRef = useRef();
  const [burst, setBurst] = useState(false);

  // Generate spiral galaxy particles
  const particles = useMemo(() => {
    const count = 5000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const scales = new Float32Array(count);

    const colorInside = new THREE.Color("#cfdcdb"); // accent color
    const colorOutside = new THREE.Color("#4b5a66"); // steel color

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Spiral galaxy shape
      const radius = Math.random() * 5;
      const spinAngle = radius * 3;
      const branchAngle = ((i % 4) / 4) * Math.PI * 2;

      // Random offset for organic look
      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.3;
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.3;
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.3;

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      // Color based on distance from center
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radius / 5);

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;

      // Random scales
      scales[i] = Math.random();
    }

    return { positions, colors, scales };
  }, []);

  // Animation loop
  useFrame((state) => {
    if (pointsRef.current) {
      // Slow rotation
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;

      // Burst effect
      if (burst) {
        const scale = 1 + Math.sin(state.clock.elapsedTime * 10) * 0.3;
        pointsRef.current.scale.set(scale, scale, scale);
      } else {
        pointsRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }

      // Drift effect
      pointsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  const handleClick = () => {
    setBurst(true);
    setTimeout(() => setBurst(false), 1000);
  };

  return (
    <points ref={pointsRef} onClick={handleClick}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-scale"
          count={particles.scales.length}
          array={particles.scales}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors={true}
        blending={THREE.AdditiveBlending}
        transparent={true}
        opacity={0.8}
      />
    </points>
  );
}

// Floating particles
function FloatingParticles() {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const pointsRef = useRef();

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#80909b"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.6}
      />
    </points>
  );
}

// Main component
export default function ParticleGalaxy() {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        background: "radial-gradient(ellipse at bottom, #0e1116 0%, #000000 100%)",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        
        {/* Background stars */}
        <Stars
          radius={100}
          depth={50}
          count={3000}
          factor={4}
          saturation={0}
          fade
          speed={0.5}
        />

        {/* Main spiral galaxy */}
        <SpiralGalaxy />

        {/* Floating particles */}
        <FloatingParticles />
      </Canvas>
    </div>
  );
}
