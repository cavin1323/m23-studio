import React from 'react';
import { Card } from '@/components/ui/Card';
import { Zap, Target, ShieldCheck, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-black mb-4">ABOUT <span className="neon-text-magenta">M23 STUDIO</span></h1>
        <p className="text-zinc-400">Where digital precision meets artisan craftsmanship.</p>
      </div>

      <div className="relative mb-20 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-cyan/20 rounded-full blur-[100px] -z-10" />
        <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
        <p className="text-zinc-400 leading-relaxed text-lg">
          M23 Studio was born from a passion for anime and the desire to bring fictional masterpieces into the physical world.
          We believe that a collectible is not just a product, but a piece of art. By combining the cutting-edge precision of
          8K resin printing with the soulful touch of hand-painting, we create figures that capture the emotion and intensity
          of the source material.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6 border-dark-border">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-neon-cyan/10 text-neon-cyan rounded-lg flex items-center justify-center">
              <Target size={20} />
            </div>
            <h3 className="font-bold text-xl">Precision Engineering</h3>
          </div>
          <p className="text-zinc-500 text-sm">We utilize industrial-grade resin printers to ensure every fold of clothing and every strand of hair is perfectly rendered.</p>
        </Card>
        <Card className="p-6 border-dark-border">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-neon-magenta/10 text-neon-magenta rounded-lg flex items-center justify-center">
              <Award size={20} />
            </div>
          <h3 className="font-bold text-xl">Artisan Finishing</h3>
          </div>
          <p className="text-zinc-500 text-sm">Our painters are trained in miniature arts, using layered glazes and weathering techniques to achieve a professional studio finish.</p>
        </Card>
        <Card className="p-6 border-dark-border">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-neon-cyan/10 text-neon-cyan rounded-lg flex items-center justify-center">
              <Zap size={20} />
            </div>
            <h3 className="font-bold text-xl">Custom Forge</h3>
          </div>
          <p className="text-zinc-500 text-sm">We partner with digital sculptors to bring your unique visions to life, from original characters to modified classics.</p>
        </Card>
        <Card className="p-6 border-dark-border">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-neon-magenta/10 text-neon-magenta rounded-lg flex items-center justify-center">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-bold text-xl">Collector Quality</h3>
          </div>
          <p className="text-zinc-500 text-sm">Every piece is carefully packed and insured, ensuring your collectible arrives in pristine condition.</p>
        </Card>
      </div>
    </div>
  );
}
