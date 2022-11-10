import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  public ordersService = new OrdersService();

  async getOrders(_req: Request, res: Response): Promise<void> {
    const result = await this.ordersService.getOrders();
    res.status(200).json(result);
  }
}