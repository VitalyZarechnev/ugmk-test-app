import { number, string, object } from 'yup';

import { TProduct } from '@/modules/products/types/products';
import { ValidationError } from '@/utils/errors/ValidationError';

const productSchema = object({
	id: number().defined(),
	factory_id: number().defined(),
	date: string().nullable().defined(),
	product1: number().nullable(),
	product2: number().nullable(),
	product3: number().nullable(),
});

export class ProductModel {
	public id: number;
	public factory_id: number;
	public date: string | null;
	public product1: number;
	public product2: number;
	public product3: number;

	constructor(data: TProduct) {
		this.validate(data);
		this.id = data.id;
		this.factory_id = data.factory_id;
		this.date = data.date;
		this.product1 = data.product1 || 0;
		this.product2 = data.product2 || 0;
		this.product3 = data.product3 || 0;
	}

	private validate(data: TProduct) {
		try {
			productSchema.validateSync(data, { strict: true });
		} catch {
			throw new ValidationError('Ошибка валидации данных, повторите попытку позже');
		}
	}
}
