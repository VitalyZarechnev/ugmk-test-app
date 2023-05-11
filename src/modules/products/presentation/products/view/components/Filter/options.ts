import { ProductType } from '@/modules/products/types/products';

export type OptionType = {
	value: string,
	label: string,
};

export const options: OptionType[] = [
	{ label: 'Все продукты', value: ProductType.ALL },
	{ label: 'Продукт 1', value: ProductType.PRODUCT_1 },
	{ label: 'Продукт 2', value: ProductType.PRODUCT_2 },
	{ label: 'Продукт 3', value: ProductType.PRODUCT_3 },
];
