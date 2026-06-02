import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Mail, Send, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black mb-4">GET IN <span className="neon-text-cyan">TOUCH</span></h1>
        <p className="text-zinc-400">Have questions about a piece or a custom order? Our forge is open.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card className="text-center p-6 border-dark-border">
          <div className="w-12 h-12 bg-neon-cyan/10 text-neon-cyan rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail size={24} />
          </div>
          <h3 className="font-bold mb-2">Email</h3>
          <p className="text-zinc-500 text-sm">contact@m23studio.com</p>
        </Card>
        <Card className="text-center p-6 border-dark-border">
          <div className="w-12 h-12 bg-neon-magenta/10 text-neon-magenta rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageSquare size={24} />
          </div>
          <h3 className="font-bold mb-2">Discord</h3>
          <p className="text-zinc-500 text-sm">discord.gg/m23studio</p>
        </Card>
        <Card className="text-center p-6 border-dark-border">
          <div className="w-12 h-12 bg-neon-cyan/10 text-neon-cyan rounded-full flex items-center justify-center mx-auto mb-4">
            <Send size={24} />
          </div>
          <h3 className="font-bold mb-2">Instagram</h3>
          <p className="text-zinc-500 text-sm">@m23_studio_forge</p>
        </Card>
      </div>

      <Card glow neon="cyan" className="p-8">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase">Name</label>
              <input
                required
                className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan"
                placeholder="Your Name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase">Email</label>
              <input
                required
                type="email"
                className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan"
                placeholder="email@example.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-500 uppercase">Message</label>
            <textarea
              required
              rows={5}
              className="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 focus:outline-none focus:border-neon-cyan"
              placeholder="How can we help you?"
            />
          </div>
          <Button size="lg" neon="cyan" className="w-full py-4">SEND MESSAGE</Button>
        </form>
      </Card>
    </div>
  );
}
