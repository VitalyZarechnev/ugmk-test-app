export enum ProductType {
	ALL = 'all',
	PRODUCT_1 = 'product1',
	PRODUCT_2 = 'product2',
	PRODUCT_3 = 'product3',
  }
  
  export enum ProductName {
	PRODUCT_1 = 'Продукт 1',
	PRODUCT_2 = 'Продукт 2',
	PRODUCT_3 = 'Продукт 3',
  }
  

export type TProduct = {
	id: number;
	date: null | string;
	product1: null | number;
	product2: null | number;
	product3: null | number;
	factory_id: number;
}
