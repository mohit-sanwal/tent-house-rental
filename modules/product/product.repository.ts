import { prisma  } from "@/lib/prisma";

export class ProductRepository {
  async findAll() {
    return prisma.product.findMany({
      orderBy: {title: "asc"},
    });
  }

  async createData(data: {
    id: string;
    title: string;
    quantityTotal: number;
    quantityBooked: number;
    pricePerDay: number;
  }) {
    return prisma.product.create({
      data,
    });
  }
}