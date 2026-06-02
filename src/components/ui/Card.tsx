"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  neon?: 'cyan' | 'magenta';
  glow?: boolean;
}

export const Card = ({
  className,
  neon = 'cyan',
  glow = false,
  children,
  ...props
}: CardProps) => {
  const borderColor = neon === 'cyan' ? 'border-neon-cyan/30' : 'border-neon-magenta/30';
  const glowClass = glow
    ? (neon === 'cyan' ? 'shadow-[0_0_15px_rgba(0,243,255,0.2)]' : 'shadow-[0_0_15px_rgba(255,0,255,0.2)]')
    : '';

  // Remove problematic props for motion.div
  const { onDrag, onDragStart, onDragEnd, ...motionProps } = props as any;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'glass-card rounded-xl border p-4 transition-all duration-300',
        borderColor,
        glowClass,
        className
      )}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};
