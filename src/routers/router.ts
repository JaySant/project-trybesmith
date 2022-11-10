import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const productController = new ProductController();
const router = Router();

router.post('/', productController.createProduct.bind(productController));
router.get('/', productController.getProducts.bind(productController));

export default router;