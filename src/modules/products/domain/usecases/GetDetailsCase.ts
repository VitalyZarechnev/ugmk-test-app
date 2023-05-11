import { IProductsRepository } from "@/modules/products/domain/IProductsRepository";

export class GetDetailsCase {
	constructor(private repository: IProductsRepository) { }

	async execute(factoryId: number, monthId: number) {
		return this.repository.getDetails(factoryId, monthId);
	}
}
