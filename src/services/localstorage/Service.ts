import { LocalStorage } from './Storage';
import { ProductType } from '@/modules/products/types/products';

enum Keys {
	PRODUCT_TYPE = 'product-type',
}

export class ProductLocalStorageService extends LocalStorage<Keys> {
	private static _instance?: ProductLocalStorageService;

	private constructor() {
		super();
	}

	public static getInstance() {
		if (!this._instance) {
			this._instance = new ProductLocalStorageService();
		}

		return this._instance;
	}

	public getProductType(): ProductType {
		return this.get(Keys.PRODUCT_TYPE) as ProductType;
	}

	public setProductType(productType: ProductType): void {
		this.set(Keys.PRODUCT_TYPE, productType);
	}

	public clear(): void {
		this.clearItem(Keys.PRODUCT_TYPE);
	}
}

export const productLocalStorageService = ProductLocalStorageService.getInstance();
