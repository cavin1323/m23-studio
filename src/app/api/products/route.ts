import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const products = await prisma.product.findMany();
    return Response.json(products);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const product = await prisma.product.create({
      data: {
        name: body.name,
        description: body.description,
        material: body.material,
        scale: body.scale,
        stock: body.stock,
        isMadeToOrder: body.isMadeToOrder || false,
        priceUnpainted: body.priceUnpainted,
        pricePainted: body.pricePainted,
        images: body.images || [],
        category: body.category,
      },
    });
    return Response.json(product);
  } catch (error) {
    return Response.json({ error: 'Failed to create product' }, { status: 500 });
  }
}
