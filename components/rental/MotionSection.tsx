"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface MotionSectionProps {
  children: React.ReactNode;
  delay?: number;
}

export default function MotionSection({ children, delay = 0 }: MotionSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        ease: [0.215, 0.61, 0.355, 1] // Custom cubic-bezier for a smooth, premium feel
      }}
    >
      {children}
    </motion.div>
  );
}
