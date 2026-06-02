"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  neon?: 'cyan' | 'magenta';
}

export const Button = ({
  className,
  variant = 'primary',
  size = 'md',
  neon = 'cyan',
  ...props
}: ButtonProps) => {
  const variants = {
    primary: neon === 'cyan'
      ? 'bg-neon-cyan text-black font-bold hover:bg-opacity-80'
      : 'bg-neon-magenta text-white font-bold hover:bg-opacity-80',
    secondary: 'bg-dark-surface text-white border border-dark-border hover:bg-zinc-800',
    outline: neon === 'cyan'
      ? 'border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10'
      : 'border border-neon-magenta text-neon-magenta hover:bg-neon-magenta/10',
    ghost: 'text-zinc-400 hover:text-white hover:bg-zinc-800',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  // Remove problematic props for motion.button
  const { onDrag, onDragStart, onDragEnd, ...motionProps } = props as any;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'rounded-md transition-all duration-20H active:scale-95 flex items-center justify-center gap-2',
        variants[variant],
        sizes[size],
        className
      )}
      {...motionProps}
    />
  );
};
