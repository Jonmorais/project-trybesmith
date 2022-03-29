import { Request, Response } from 'express';
import ProductService from '../services/productsServices';

class ProductController {
  constructor(private productService = new ProductService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();

    return res.status(200).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const createdProduct = await this.productService.create(product);

    return res.status(201).json(createdProduct);
  };
}

export default ProductController;
