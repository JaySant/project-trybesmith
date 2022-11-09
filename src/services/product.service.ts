import { IProduct } from '../interfaces/IProduct';
import ProductModel from '../models/product.model';

export default class ProductService {
  public productModel = new ProductModel();

  async createProduct(name: string, amount: string): Promise<IProduct> {
    return this.productModel.createProduct(name, amount);
  } 
}