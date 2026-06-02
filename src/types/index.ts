export type Material = 'RESIN' | 'PLA' | 'MIXED';
export type Variant = 'PAINTED' | 'UNPAINTED';

export interface Product {
  id: string;
  name: string;
  description: string;
  material: Material;
  scale: string;
  stock: number;
  isMadeToOrder: boolean;
  priceUnpainted: number;
  pricePainted: number;
  images: string[];
  category: string;
}

export interface ShoppingCartItem {
  productId: string;
  name: string;
  variant: Variant;
  price: number;
  quantity: number;
  image: string;
}

export interface CustomOrderRequest {
  customerName: string;
  customerEmail: string;
  description: string;
  imageUploadUrl?: string;
}
