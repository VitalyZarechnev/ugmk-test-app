import { ProductsDataSourceImpl } from '@/modules/products/data/ProductsDataSourceImpl';
import { ApplicationError } from '@/utils/errors/ApplicationError';
import { ValidationError } from '@/utils/errors/ValidationError';
import { ProductType } from '@/modules/products/types/products';
import { ProductModel } from '@/modules/products/domain/models/ProductModel';
import { IProductsRepository } from '@/modules/products/domain/IProductsRepository';

export class ProductsRepositoryImpl implements IProductsRepository {
	constructor(private dataSource: ProductsDataSourceImpl) { }

	public async getProducts(type: ProductType) {
		try {
			const response = await this.dataSource.getProducts(type);
			if (response) {
				return response.map((item) => new ProductModel(item));
			}

			return [];
		} catch (e) {
			if (e instanceof ValidationError) {
				throw new ValidationError(e.message);
			}

			throw new ApplicationError()
		}
	}

	public async getDetails(factoryId: number, monthId: number) {
		try {
			const response = await this.dataSource.getDetails(factoryId, monthId);

			if (response) {
				return response.map((item) => new ProductModel(item));
			}

			return [];
		} catch (e) {
			if (e instanceof ValidationError) {
				throw new ValidationError(e.message);
			}

			throw new ApplicationError()
		}
	}
}
