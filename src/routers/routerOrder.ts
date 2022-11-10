import { Router } from 'express';
import OrdersController from '../controllers/orders.controllers';

const ordersController = new OrdersController();
const router = Router();

router.get('/', ordersController.getOrders.bind(ordersController));

export default router;