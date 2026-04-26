import { ProductRepository } from "./product.repository";

export class ProductService {
  private repo = new ProductRepository();

  async getProducts() {
    return this.repo.findAll();
  }

  async createProduct(data: any) {
    return this.repo.create(data);
  }
}