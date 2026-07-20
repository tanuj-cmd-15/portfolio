"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";


const Photo = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.8, duration: 0.4, ease: "easeInOut" },
          }}
        >
          {!imageError ? (
            <Image
              src="/photo.png"
              priority
              quality={100}
              fill
              alt="Tushar Pawar"
              className="object-contain"
              sizes="(max-width: 768px) 298px, 498px"
              unoptimized
              onError={() => setImageError(true)}
            />
          ) : (
            <img
              src="/photo.png"
              alt="Tushar Pawar"
              className="w-full h-full object-contain"
            />
          )}
        </motion.div>

        {/* outer circle — white with low opacity, slower rotation */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial = {{strokeDasharray: "24 10 0 0"}}
            animate = {{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360]
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse"
            }}
          />
          {/* inner circle — white with very low opacity, faster rotation */}
          <motion.circle
            cx="253"
            cy="253"
            r="235"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial = {{strokeDasharray: "8 30 0 0"}}
            animate = {{
                strokeDasharray: ["10 80 15 15", "8 15 50 40", "3 120 12 12"],
                rotate: [360, 0]
            }}
            transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: "reverse"
            }}
          />
          {/* outermost subtle ring — white with minimal opacity */}
          <circle
            cx="253"
            cy="253"
            r="252"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
            fill="none"
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;