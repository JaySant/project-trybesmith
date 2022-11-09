import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  public productService = new ProductService();

  async createProduct(req: Request, res: Response): Promise<void> {
    const { name } = req.body;
    const { amount } = req.body;
    const result = await this.productService.createProduct(name, amount);
    res.status(201).json(result);
  }

  async getProducts(req: Request, res: Response): Promise<void> {
    const result = await this.productService.getProducts();
    res.status(200).json(result);
  }
}