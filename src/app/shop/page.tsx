"use client";
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Product, Variant } from '@/types';
import { useCart } from '@/context/CartContext';
import { convertPrice } from '@/lib/currency';
import { Palette, Box, Scale } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'JPY' | 'GBP'>('USD');
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (data && typeof data === 'object' && data.products) {
          setProducts(data.products);
        } else {
          console.error('Expected array of products but received:', data);
          setProducts([]);
        }
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setProducts([]);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-black mb-2">THE <span className="neon-text-cyan">COLLECTION</span></h1>
          <p className="text-zinc-400">Curated masterpieces from the forge.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-zinc-500 font-medium">CURRENCY:</span>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value as any)}
            className="bg-dark-surface border border-dark-border rounded px-2 py-1 text-sm focus:outline-none focus:border-neon-cyan"
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="JPY">JPY (¥)</option>
            <option value="GBP">GBP (£)</option>
            <option value="KWD">KWD (KWD)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <Card key={product.id} glow neon="cyan" className="group">
            <div className="aspect-square bg-zinc-900 rounded-lg mb-4 relative overflow-hidden">
              {product.images[0] ? (
                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zinc-700 font-bold text-2xl">NO IMAGE</div>
              )}
              <div className="absolute top-2 right-2">
                <span className={cn(
                  "text-[10px] font-bold px-2 py-1 rounded uppercase",
                  product.stock > 0 ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-red-500/20 text-red-400 border border-red-500/30"
                )}>
                  {product.stock > 0 ? 'In Stock' : 'Sold Out'}
                </span>
              </div>
            </div>
            <h3 className="font-bold text-lg mb-1 group-hover:text-neon-cyan transition-colors">{product.name}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="flex items-center gap-1 text-[10px] text-zinc-500 bg-zinc-800 px-1.5 py-0.5 rounded">
                <Box size={10} /> {product.material}
              </div>
              <div className="flex items-center gap-1 text-[10px] text-zinc-500 bg-zinc-800 px-1.5 py-0.5 rounded">
                <Scale size={10} /> {product.scale}
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-[10px] text-zinc-500 uppercase font-bold">Price (Unpainted)</p>
                <p className="text-lg font-black neon-text-magenta">{convertPrice(product.priceUnpainted, currency)}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-zinc-500 uppercase font-bold">Painted</p>
                <p className="text-lg font-black neon-text-cyan">{convertPrice(product.pricePainted, currency)}</p>
              </div>
            </div>
            <Link href={`/shop/${product.id}`} className="w-full">
              <Button variant="outline" neon="cyan" className="w-full">VIEW DETAILS</Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
