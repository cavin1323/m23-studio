"use client";
import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Palette, Upload, Send, CheckCircle } from 'lucide-react';
import { useState as reactuseState } from 'react';

export default function CustomOrderPage() {
  const [submitted, setSubmitted] = reactuseState(false);
  const [loading, setLoading] = reactuseState(false);
  const [formData, setFormData] = reactuseState({
    customerName: '',
    customerEmail: '',
    description: '',
    imageUploadUrl: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/custom-orders', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      if (res.ok) setSubmitted(true);
    } catch (error) {
      console.error('Order failed', error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
          <CheckCircle size={40} />
        </div>
        <h1 className="text-4xl font-black mb-4">REQUEST <span className="neon-text-cyan">RECEIVED</span></h1>
        <p className="text-zinc-400 mb-8">Our master smiths have received your request. We will review your specifications and contact you via email within 48 hours.</p>
        <Button variant="outline" neon="cyan" onClick={() => setSubmitted(false)}>SUBMIT ANOTHER REQUEST</Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black mb-4">CUSTOM <span className="neon-text-magenta">FORGE</span></h1>
        <p className="text-zinc-400">Submit your custom figure design, scale, and painting requirements.</p>
      </div>

      <Card glow neon="magenta" className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase">Your Name</label>
              <input
                required
                type="text"
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-neon-magenta"
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase">Email Address</label>
              <input
                required
                type="email"
                value={formData.customerEmail}
                onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-neon-magenta"
                placeholder="email@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-500 uppercase">Project Description</label>
            <textarea
              required
              rows={5}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-neon-magenta"
              placeholder="Describe the character, pose, scale, and painting details..."
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-500 uppercase">Reference Image URL</label>
            <div className="flex gap-4">
              <input
                type="text"
                value={formData.imageUploadUrl}
                onChange={(e) => setFormData({ ...formData, imageUploadUrl: e.target.value })}
                className="flex-1 bg-dark-surface border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-neon-magenta"
                placeholder="Paste a link to your design image..."
              />
              <Button variant="secondary" className="px-4"><Upload size={18} /></Button>
            </div>
            <p className="text-[10px] text-zinc-500">Note: File uploads are currently handled via URL. Image upload integration coming soon.</p>
          </div>

          <Button
            type="submit"
            size="lg"
            neon="magenta"
            className="w-full py-4"
            disabled={loading}
          >
            {loading ? 'SUBMITTING...' : <><Send size={18} className="mr-2" /> SUBMIT FORGE REQUEST</>}
          </Button>
        </form>
      </Card>
    </div>
  );
}
