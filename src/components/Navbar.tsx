"use client";
import React from 'react';
import Link from 'next/link';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-3 group">
              <img src="/logo.png" alt="M23 Studio Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-black tracking-tighter neon-text-cyan">
                M23 STUDIO
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/shop" className="text-sm font-medium hover:text-neon-cyan transition-colors">SHOP</Link>
            <Link href="/custom-order" className="text-sm font-medium hover:text-neon-magenta transition-colors">CUSTOM ORDERS</Link>
            <Link href="/about" className="text-sm font-medium hover:text-neon-cyan transition-colors">ABOUT</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-neon-magenta transition-colors">CONTACT</Link>

            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-dark-border">
              <Link href="/cart" className="relative p-2 hover:text-neon-cyan transition-colors">
                <ShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-neon-magenta text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  0
                </span>
              </Link>
              <Link href="/admin" className="p-2 hover:text-neon-cyan transition-colors">
                <User size={20} />
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <Link href="/cart" className="relative p-2">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-neon-magenta text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                0
              </span>
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-dark-border p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <Link href="/shop" onClick={() => setIsOpen(false)} className="text-lg font-medium py-2 hover:text-neon-cyan">SHOP</Link>
          <Link href="/custom-order" onClick={() => setIsOpen(false)} className="text-lg font-medium py-2 hover:text-neon-magenta">CUSTOM ORDERS</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium py-2 hover:text-neon-cyan">ABOUT</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium py-2 hover:text-neon-magenta">CONTACT</Link>
          <Link href="/admin" onClick={() => setIsOpen(false)} className="text-lg font-medium py-2 hover:text-neon-cyan">ADMIN</Link>
        </div>
      )}
    </nav>
  );
}
