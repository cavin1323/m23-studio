import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const customOrder = await prisma.customOrder.create({
      data: {
        customerName: body.customerName,
        customerEmail: body.customerEmail,
        description: body.description,
        imageUploadUrl: body.imageUploadUrl,
      },
    });
    return Response.json(customOrder);
  } catch (error) {
    return Response.json({ error: 'Failed to create custom order' }, { status: 500 });
  }
}
