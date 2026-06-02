import type { Metadata } from "next";
import "./globals.css";
import Navbar from '@/components/Navbar';
import { CartProvider } from '@/context/CartContext';

export const metadata: Metadata = {
  title: "M23 Studio | Premium Anime Collectibles",
  description: "Hand-painted 3D printed anime action figures",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-screen bg-background text-foreground">
        <CartProvider>
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
