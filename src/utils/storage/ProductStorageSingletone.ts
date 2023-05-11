import { TProduct } from "@/modules/products/types/products";

export class ProductStorageSingletone {
	private static _instance: ProductStorageSingletone;
	private _array: TProduct[] = [];

	private constructor() {}

	public static getInstance(): ProductStorageSingletone {
		if (!ProductStorageSingletone._instance) {
			ProductStorageSingletone._instance = new ProductStorageSingletone();
		}

		return ProductStorageSingletone._instance;
	}

	get data() {
		return this._array;
	}

	set(data: TProduct[]) {
		this._array = data;
	}

	get isEmpty() {
		return this._array.length === 0;
	}
}

export const ProductStorage = ProductStorageSingletone.getInstance();
