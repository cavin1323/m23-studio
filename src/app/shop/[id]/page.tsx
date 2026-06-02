import { prisma } from '@/lib/prisma';
import { Product, Variant } from '@/types';
import { notFound } from 'next/navigation';
import ProductDetailsClient from './ProductDetailsClient';

export default async function ProductDetailsPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const product = await prisma.product.findUnique({
    where: { id: id },
  });

  if (!product) notFound();

  return <ProductDetailsClient product={product} />;
}
