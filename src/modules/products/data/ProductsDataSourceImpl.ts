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

		let response = {} as Response;

		response = await fetch('http://localhost:3001/products');

		let products: TProduct[] = [];

		if (response.ok) {
			products = await response.json();
		}

		const clearProducts = this.clearEmtyDates(products);

		this.storage.set(clearProducts);
		return clearProducts;
	}

	private clearEmtyDates(products: TProduct[]) {
		const filterDate = (date?: TProduct['date']): date is string => !!date;
		const filtredProducts = products.filter((product) => filterDate(product.date)) || [];
		return filtredProducts;
	}

	async getProducts(type: ProductType): Promise<TProduct[]> {
		const allProducts = await this.getJson();
		if (type === ProductType.ALL) {
			return allProducts;
		}

		const filtredProducts = allProducts.map((product) => ({
			id: product.id,
			date: product.date,
			factory_id: product.factory_id,
			product1: type === ProductType.PRODUCT_1 ? product.product1 : 0,
			product2: type === ProductType.PRODUCT_2 ? product.product2 : 0,
			product3: type === ProductType.PRODUCT_3 ? product.product3 : 0,
		}))

		return filtredProducts;
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

		const product = products?.filter(product => {
			return getMonth(product.date) === (monthId - 1) && product.factory_id === factoryId;
		}) || [];

		return product;
	}
}
