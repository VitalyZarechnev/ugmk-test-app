import { ProductType } from '@/modules/products/types/products';
import { TProduct } from '@/modules/products/types/products';

export interface IProductsDataSource {
	getProducts(type: ProductType): Promise<TProduct[]>;
	getDetails(factoryId: number, monthId: number): Promise<TProduct[]>;
}
