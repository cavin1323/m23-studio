"use client";
import React, { useState } from 'react';
import { Product, Variant } from '@/types';
import { useCart } from '@/context/CartContext';
import { convertPrice } from '@/lib/currency';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Palette, Box, Scale, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ProductDetailsClient({ product }: { product: any }) {
  const [variant, setVariant] = useState<Variant>('UNPAINTED');
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'JPY' | 'GBP'>('USD');
  const { addToCart } = useCart();

  const currentPrice = variant === 'PAINTED' ? product.pricePainted : product.priceUnpainted;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="aspect-square bg-zinc-900 rounded-2xl overflow-hidden border border-dark-border">
            {product.images[0] ? (
              <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-zinc-700 font-bold text-3xl">NO IMAGE</div>
            )}
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.slice(1).map((img: string, i: number) => (
              <div key={i} className="aspect-square bg-zinc-900 rounded-lg overflow-hidden border border-dark-border cursor-pointer">
                <img src={img} alt={product.name} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-5xl font-black mb-4">{product.name}</h1>
            <p className="text-zinc-400 leading-relaxed mb-6">{product.description}</p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="glass-card p-3 rounded-xl border-dark-border flex flex-col items-center text-center">
                <Box size={20} className="text-neon-cyan mb-2" />
                <span className="text-[10px] text-zinc-500 uppercase font-bold">Material</span>
                <span className="text-sm font-medium">{product.material}</span>
              </div>
              <div className="glass-card p-3 rounded-xl border-dark-border flex flex-col items-center text-center">
                <Scale size={20} className="text-neon-magenta mb-2" />
                <span className="text-[10px] text-zinc-500 uppercase font-bold">Scale</span>
                <span className="text-sm font-medium">{product.scale}</span>
              </div>
              <div className="glass-card p-3 rounded-xl border-dark-border flex flex-col items-center text-center">
                <ShieldCheck size={20} className="text-green-400 mb-2" />
                <span className="text-[10px] text-zinc-500 uppercase font-bold">Stock</span>
                <span className="text-sm font-medium">{product.stock > 0 ? `${product.stock} Available` : 'Sold Out'}</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold text-zinc-500 uppercase">Choose Version:</span>
              <div className="flex gap-4">
                <button
                  onClick={() => setVariant('UNPAINTED')}
                  className={cn(
                    "flex-1 py-3 px-4 rounded-xl border transition-all font-bold",
                    variant === 'UNPAINTED' ? "border-neon-cyan text-neon-cyan bg-neon-cyan/10" : "border-dark-border text-zinc-500 bg-dark-surface"
                  )}
                >
                  UNPAINTED / PRINT ONLY
                </button>
                <button
                  onClick={() => setVariant('PAINTED')}
                  className={cn(
                    "flex-1 py-3 px-4 rounded-xl border transition-all font-bold",
                    variant === 'PAINTED' ? "border-neon-magenta text-neon-magenta bg-neon-magenta/10" : "border-dark-border text-zinc-500 bg-dark-surface"
                  )}
                >
                  PROFESSIONALLY PAINTED
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-6 glass-card rounded-2xl border-neon-cyan/30">
              <div>
                <span className="text-sm text-zinc-500 block mb-1">Total Price</span>
                <span className="text-4xl font-black neon-text-magenta">{convertPrice(currentPrice, currency)}</span>
              </div>
              <Button
                size="lg"
                neon={variant === 'PAINTED' ? 'magenta' : 'cyan'}
                disabled={product.stock <= 0 && !product.isMadeToOrder}
                onClick={() => addToCart({
                  productId: product.id,
                  name: product.name,
                  variant,
                  price: currentPrice,
                  quantity: 1,
                  image: product.images[0],
                })}
              >
                ADD TO CART
              </Button>
            </div>

            <div className="flex gap-3">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as any)}
                className="bg-dark-surface border border-dark-border rounded px-2 py-1 text-xs focus:outline-none"
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="JPY">JPY (¥)</option>
                <option value="GBP">GBP (£)</option>
              </select>
              <span className="text-xs text-zinc-500 mt-1">Automatic currency conversion based on current rates.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
