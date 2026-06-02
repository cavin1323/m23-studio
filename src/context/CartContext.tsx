"use client";
import React, { createContext, useContext, useState } from 'react';
import { ShoppingCartItem } from '@/types';

interface CartContextType {
  cart: ShoppingCartItem[];
  addToCart: (item: ShoppingCartItem) => void;
  removeFromCart: (productId: string, variant: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<ShoppingCartItem[]>([]);

  const addToCart = (item: ShoppingCartItem) => {
    setCart((prev) => {
      const existing = prev.find(i => i.productId === item.productId && i.variant === item.variant);
      if (existing) {
        return prev.map(i =>
          (i.productId === item.productId && i.variant === item.variant)
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (productId: string, variant: string) => {
    setCart((prev) => prev.filter(i => !(i.productId === productId && i.variant === variant)));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
}
