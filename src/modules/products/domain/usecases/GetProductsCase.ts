import { ProductType } from '@/modules/products/types/products';
import { IProductsRepository } from "@/modules/products/domain/IProductsRepository";

export class GetProductsCase {
	constructor(private repository: IProductsRepository) {}

	async execute(productType: ProductType) {
		return this.repository.getProducts(productType);
	}
}
