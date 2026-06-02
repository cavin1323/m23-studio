"use client";
import React, { useState, useEffect } from 'react';
import { Product } from '@/types';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Trash2, Plus, Save } from 'lucide-react';

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    material: 'RESIN' as any,
    scale: '',
    stock: 0,
    isMadeToOrder: false,
    priceUnpainted: 0,
    pricePainted: 0,
    category: '',
    images: '',
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...formData,
      images: formData.images.split(',').map(s => s.trim()),
      priceUnpainted: parseFloat(formData.priceUnpainted.toString()),
      pricePainted: parseFloat(formData.pricePainted.toString()),
      stock: parseInt(formData.stock.toString()),
    };

    await fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    setIsAdding(false);
    fetchProducts();
  };

  const deleteProduct = async (id: string) => {
    if (!confirm('Delete this product?')) return;
    await fetch(`/api/products/${id}`, { method: 'DELETE' });
    fetchProducts();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-black">ADMIN <span className="neon-text-cyan">CONTROL</span></h1>
          <p className="text-zinc-400">Manage your collectibles and forge orders.</p>
        </div>
        <Button onClick={() => setIsAdding(true)} neon="magenta">
          <Plus size={18} className="mr-2" /> ADD PRODUCT
        </Button>
      </div>

      {isAdding && (
        <Card glow neon="magenta" className="mb-12 p-8 animate-in fade-in slide-in-from-bottom-4">
          <h2 className="text-2xl font-bold mb-6">CREATE NEW COLLECTIBLE</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase">Product Name</label>
              <input
                required
                className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-2 focus:border-neon-magenta outline-none"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase">Category</label>
              <input
                required
                className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-2 focus:border-neon-magenta outline-none"
                value={formData.category}
                onChange={e => setFormData({...formData, category: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase">Material</label>
              <select
                className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-2 focus:border-neon-magenta outline-none"
                value={formData.material}
                onChange={e => setFormData({...formData, material: e.target.value as any})}
              >
                <option value="RESIN">RESIN</option>
                <option value="PLA">PLA</option>
                <option value="MIXED">MIXED</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase">Scale (e.g. 1:6)</label>
              <input
                required
                className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-2 focus:border-neon-magenta outline-none"
                value={formData.scale}
                onChange={e => setFormData({...formData, scale: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase">Stock Quantity</label>
              <input
                required
                type="number"
                className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-2 focus:border-neon-magenta outline-none"
                value={formData.stock}
                onChange={e => setFormData({...formData, stock: parseInt(e.target.value)})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase">Made to Order?</label>
              <select
                className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-2 focus:border-neon-magenta outline-none"
                value={formData.isMadeToOrder.toString()}
                onChange={e => setFormData({...formData, isMadeToOrder: e.target.value === 'true'})}
              >
                <option value="false">NO</option>
                <option value="true">YES</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase">Price (Unpainted)</label>
              <input
                required
                type="number"
                className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-2 focus:border-neon-magenta outline-none"
                value={formData.priceUnpainted}
                onChange={e => setFormData({...formData, priceUnpainted: parseFloat(e.target.value)})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase">Price (Painted)</label>
              <input
                required
                type="number"
                className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-2 focus:border-neon-magenta outline-none"
                value={formData.pricePainted}
                onChange={e => setFormData({...formData, pricePainted: parseFloat(e.target.value)})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase">Images (Comma separated URLs)</label>
              <input
                required
                className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-2 focus:border-neon-magenta outline-none"
                value={formData.images}
                onChange={e => setFormData({...formData, images: e.target.value})}
              />
            </div>
            <div className="col-span-full space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase">Description</label>
              <textarea
                required
                className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 focus:border-neon-magenta outline-none"
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
              />
            </div>
            <div className="col-span-full flex justify-end gap-4">
              <Button variant="ghost" onClick={() => setIsAdding(false)}>CANCEL</Button>
              <Button type="submit" neon="magenta"><Save size={18} className="mr-2" /> SAVE PRODUCT</Button>
            </div>
          </form>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="p-6 flex flex-col justify-between">
            <div>
              <div className="aspect-square bg-zinc-900 rounded-lg mb-4 overflow-hidden">
                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-xl mb-1">{product.name}</h3>
              <p className="text-zinc-500 text-sm mb-4 line-clamp-2">{product.description}</p>
              <div className="flex justify-between text-xs font-bold text-zinc-400 mb-4">
                <span>${product.priceUnpainted} / ${product.pricePainted}</span>
                <span>Stock: {product.stock}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" neon="cyan" className="flex-1" onClick={() => {}}>EDIT</Button>
              <Button variant="ghost" className="text-red-400 hover:text-red-500" onClick={() => deleteProduct(product.id)}>
                <Trash2 size={18} />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
