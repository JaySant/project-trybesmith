import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProduct } from '../interfaces/IProduct';

export default class ProductModel {
  public connection = connection;

  async createProduct(name: string, amount: string): Promise<IProduct> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products(name, amount) VALUES(?,?)', 
      [name, amount],
    );
    const Product = { id: insertId, name, amount };
    return Product;
  }

  async 
}
