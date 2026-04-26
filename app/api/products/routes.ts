import { NextResponse } from "next/server";
import { ProductService } from "@/modules/product/product.service";

const service = new ProductService();

export async function GET() {
  const data = await service.getProducts();
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  const product = await service.createProduct(body);
  return NextResponse.json(product);
}