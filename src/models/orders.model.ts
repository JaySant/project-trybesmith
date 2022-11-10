import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { IOrders } from '../interfaces/IOrders';

export default class OrdersModel {
  public connection = connection;

  async getOrders(): Promise<IOrders[]> {
    const [result] = await this.connection.execute<IOrders[] & RowDataPacket[]>(
      `SELECT Trybesmith.Orders.id, Trybesmith.Orders.userId, 
      JSON_ARRAYAGG(Trybesmith.Products.id) AS productsIds
      FROM Trybesmith.Orders, Trybesmith.Products
      WHERE Trybesmith.Orders.id = Trybesmith.Products.orderId
     GROUP BY id`,
    );
    return result;
  }
}