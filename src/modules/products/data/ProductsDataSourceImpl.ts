import { IProductsDataSource } from './interfaces/IProductsDataSource';
import { ProductStorageSingletone } from '@/utils/storage/ProductStorageSingletone';
import { ProductType } from '@/modules/products/types/products';
import { TProduct } from '@/modules/products/types/products';
import { getMonth } from '@/utils/date';
import { ValidationError } from '@/utils/errors/ValidationError';

export class ProductsDataSourceImpl implements IProductsDataSource {
	constructor(private storage: ProductStorageSingletone) { }

	private async getJson(cache = true): Promise<TProduct[]> {
		if (cache && !this.storage.isEmpty) {
			return this.storage.data;
		}

		const response = await fetch('http://localhost:3001/products');

		let products: TProduct[] = [];

		if (response.ok) {
			products = await response.json();
		}

		const clearProducts = this.clearEmptyDates(products);

		this.storage.set(clearProducts);
		return clearProducts;
	}

	private clearEmptyDates(products: TProduct[]) {
		const filterDate = (date?: TProduct['date']): date is string => !!date;
		return products.filter((product) => filterDate(product.date)) || [];
	}

	async getProducts(type: ProductType): Promise<TProduct[]> {
		const allProducts = await this.getJson();
		if (type === ProductType.ALL) {
			return allProducts;
		}

		return allProducts.map((product) => ({
			id: product.id,
			date: product.date,
			factory_id: product.factory_id,
			product1: type === ProductType.PRODUCT_1 ? product.product1 : 0,
			product2: type === ProductType.PRODUCT_2 ? product.product2 : 0,
			product3: type === ProductType.PRODUCT_3 ? product.product3 : 0,
		}))
	}

	async getDetails(factoryId: number, monthId: number): Promise<TProduct[]> {

		if (!(monthId > 0 && monthId < 13)) {
			throw new ValidationError('Поле месяц не валидно. Может содержать числа от 1 до 12')
		}

		const products = await this.getJson();


		const isFactoryValid = !!products.find(product => product.factory_id === factoryId);

		if (!isFactoryValid) {
			throw new ValidationError('Фабрика не найдена, попробуйте другую');
		}

		return products.filter(product => {
			return getMonth(product.date) === (monthId - 1) && product.factory_id === factoryId;
		}) || []; 
	}
}
