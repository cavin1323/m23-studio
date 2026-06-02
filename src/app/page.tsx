'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ArrowRight, Box, Palette, Zap } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen cyber-grid">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-magenta/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
              FORGING <span className="neon-text-cyan">DIGITAL</span> <br />
              <span className="neon-text-magenta">REALITIES</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Premium 3D-printed anime collectibles. Masterfully crafted in resin,
              meticulously hand-painted, and delivered to your forge.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/shop">
                <Button size="lg" neon="cyan">
                  EXPLORE SHOP <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/custom-order">
                <Button size="lg" variant="outline" neon="magenta">
                  REQUEST CUSTOM <Zap size={18} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card glow neon="cyan">
            <div className="w-12 h-12 bg-neon-cyan/10 text-neon-cyan rounded-lg flex items-center justify-center mb-4">
              <Box size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Ultra-High Precision</h3>
            <p className="text-zinc-400">Using professional-grade 8K resin prints for microscopic detail and smooth surfaces.</p>
          </Card>
          <Card glow neon="magenta">
            <div className="w-12 h-12 bg-neon-magenta/10 text-neon-magenta rounded-lg flex items-center justify-center mb-4">
              <Palette size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Hand-Painted Mastery</h3>
            <p className="text-zinc-400">Every detail is hand-painted by artists to bring your favorite characters to life.</p>
          </Card>
          <Card glow neon="cyan">
            <div className="w-12 h-12 bg-neon-cyan/10 text-neon-cyan rounded-lg flex items-center justify-center mb-4">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Custom Forge</h3>
            <p className="text-zinc-400">Have a specific design? We print and paint your own custom files to perfection.</p>
          </Card>
        </div>
      </section>

      {/* Featured Section Placeholder */}
      <section className="py-20 px-4 bg-dark-surface/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black mb-2">FEATURED <span className="neon-text-cyan">COLLECTIBLES</span></h2>
              <p className="text-zinc-400">Our most sought-after pieces of the season.</p>
            </div>
            <Link href="/shop" className="hidden md:block text-neon-cyan hover:underline font-medium">View All Shop →</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="group cursor-pointer overflow-hidden">
                <div className="aspect-square bg-zinc-900 rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <Button size="sm" variant="primary" neon="cyan" className="w-full">Quick View</Button>
                  </div>
                  <div className="w-full h-full flex items-center justify-center text-zinc-700 font-bold text-4xl">
                    Figure {i}
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-1 group-hover:text-neon-cyan transition-colors">Anime Legend #{i}</h4>
                <p className="text-zinc-500 text-sm mb-3">Resin / 1:6 Scale</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-black neon-text-magenta">$120.00</span>
                  <span className="text-xs text-zinc-600">In Stock</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
