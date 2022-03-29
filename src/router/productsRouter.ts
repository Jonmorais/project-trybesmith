import express from 'express';
import ProductController from '../controllers/productsController';
import validateProduct from '../middlewares/productValidator';

const router = express.Router();

const productController = new ProductController();

router.get('/', productController.getAll);
router.post('/', validateProduct, productController.create);

export default router;
