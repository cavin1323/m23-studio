'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Trash2, CreditCard, Lock } from 'lucide-react';
import { convertPrice } from '@/lib/currency';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, totalPrice, clearCart } = useCart();
  const [currency, setCurrency] = React.useState<'USD' | 'EUR' | 'JPY' | 'GBP'>('USD');

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-black mb-4">YOUR <span className="neon-text-cyan">FORGE</span> IS EMPTY</h1>
        <p className="text-zinc-400 mb-8">You haven't added any collectibles to your order yet.</p>
        <Link href="/shop">
          <Button variant="primary" neon="cyan">GO TO SHOP</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-black">YOUR <span className="neon-text-magenta">ORDER</span></h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-zinc-500 font-medium">CURRENCY:</span>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value as any)}
            className="bg-dark-surface border border-dark-border rounded px-2 py-1 text-sm focus:outline-none"
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="JPY">JPY (¥)</option>
            <option value="GBP">GBP (£)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <Card key={`${item.productId}-${item.variant}`} className="flex items-center gap-6 p-6">
              <div className="w-24 h-24 bg-zinc-900 rounded-lg overflow-hidden flex-shrink-0">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-700 font-bold">NO IMG</div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-xs text-zinc-500 uppercase font-bold">{item.variant} Version</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.productId, item.variant)}
                    className="text-zinc-600 hover:text-red-400 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-black neon-text-cyan">{convertPrice(item.price, currency)}</span>
                  <div className="flex items-center gap-3 bg-dark-surface border border-dark-border rounded-lg px-3 py-1">
                    <button className="text-zinc-500 hover:text-white" onClick={() => {}}>-</button>
                    <span className="text-sm font-bold">{item.quantity}</span>
                    <button className="text-zinc-500 hover:text-white" onClick={() => {}}>+</button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
          <Button variant="outline" neon="magenta" className="w-full py-3" onClick={clearCart}>
            CLEAR ALL ITEMS
          </Button>
        </div>

        <div className="lg:col-span-1">
          <Card glow neon="cyan" className="p-8 sticky top-24">
            <h2 className="text-2xl font-black mb-6">ORDER SUMMARY</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-zinc-400">
                <span>Subtotal</span>
                <span>{convertPrice(totalPrice, currency)}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Shipping</span>
                <span className="text-green-400">FREE</span>
              </div>
              <div className="border-t border-dark-border pt-4 flex justify-between items-center font-black text-xl">
                <span>TOTAL</span>
                <span className="neon-text-magenta">{convertPrice(totalPrice, currency)}</span>
              </div>
            </div>
            <Button size="lg" neon="cyan" className="w-full py-4 flex items-center justify-center gap-2">
              <CreditCard size={20} /> PROCEED TO CHECKOUT
            </Button>
            <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-zinc-500 uppercase font-bold">
              <Lock size={12} /> Secure encrypted checkout
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
