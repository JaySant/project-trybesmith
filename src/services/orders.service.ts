import { IOrders } from '../interfaces/IOrders';
import OrdersModel from '../models/orders.model';

export default class OrdersService {
  public ordersModel = new OrdersModel();

  async getOrders(): Promise<IOrders[]> {
    return this.ordersModel.getOrders();
  }
}