import { ProductType } from '@/modules/products/types/products';
import { ProductModel } from '@/modules/products/domain/models/ProductModel';

export interface IProductsRepository {
	getProducts(type: ProductType): Promise<ProductModel[]>;
	getDetails(factoryId: number, monthId: number): Promise<ProductModel[]>;
}
