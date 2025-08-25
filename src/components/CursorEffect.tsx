"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none hidden md:block fixed z-50 mix-blend-screen"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
      }}
      transition={{ type: "spring", bounce: 0.5, stiffness: 600, damping: 22, mass: 1 }}
    >
      <div className="w-12 h-12 bg-[#00a890] rounded-full opacity-100 blur-[74px]" />
    </motion.div>
  );
};

export default CursorEffect;
