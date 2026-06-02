'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Lock, CreditCard, ShieldCheck } from 'lucide-react';
import { convertPrice } from '@/lib/currency';
import { useCart } from '@/context/CartContext';

export default function CheckoutPage() {
  const { totalPrice } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h1 className="text-4xl font-black">SECURE <span className="neon-text-cyan">CHECKOUT</span></h1>

          <Card glow neon="cyan" className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase">First Name</label>
                <input className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase">Last Name</label>
                <input className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase">Email Address</label>
              <input className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase">Shipping Address</label>
              <textarea rows={3} className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan" placeholder="Street, City, State, Zip, Country" />
            </div>
          </Card>

          <Card glow neon="magenta" className="p-8 space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <CreditCard size={20} /> Payment Details
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase">Card Number</label>
                <input className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-neon-magenta" placeholder="0000 0000 0000 0000" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Expiry Date</label>
                  <input className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-neon-magenta" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase">CVV</label>
                  <input className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-neon-magenta" placeholder="123" />
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card glow neon="cyan" className="p-8 sticky top-24 space-y-6">
            <h2 className="text-2xl font-black mb-6">ORDER TOTAL</h2>
            <div className="space-y-4">
              <div className="flex justify-between text-zinc-400">
                <span>Items Subtotal</span>
                <span>{convertPrice(totalPrice, 'USD')}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Taxes</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Shipping</span>
                <span className="text-green-400">FREE</span>
              </div>
              <div className="border-t border-dark-border pt-4 flex justify-between items-center font-black text-2xl">
                <span>TOTAL</span>
                <span className="neon-text-magenta">{convertPrice(totalPrice, 'USD')}</span>
              </div>
            </div>
            <Button size="lg" neon="cyan" className="w-full py-4 flex items-center justify-center gap-2">
              <Lock size={20} /> COMPLETE PURCHASE
            </Button>
            <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-500 uppercase font-bold">
              <ShieldCheck size={12} /> 256-bit SSL Encrypted Payment
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
