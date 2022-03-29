import connection from '../models/connection';
import ProductModel from '../models/productsModel';
import Product from '../interfaces/productInterface';

type ProductType = {
  item: Product | null,
};

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();

    return products as Product[];
  }

  public async create(product: Product): Promise<ProductType> {
    const id = await this.model.create(product);

    return { item: { id, ...product } };
  }
}

export default ProductService;
