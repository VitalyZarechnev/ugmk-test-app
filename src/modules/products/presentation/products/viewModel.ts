import { makeAutoObservable, runInAction, toJS } from 'mobx';

import { ProductType } from '@/modules/products/types/products';
import { ProductModel } from '@/modules/products/domain/models/ProductModel';
import { GetProductsCase } from '@/modules/products/domain/usecases/GetProductsCase';
import { ProductLocalStorageService } from '@/services/localstorage/Service';

export class ProductsViewModel {
	private _products: ProductModel[] = [];
	private _isLoading = true;
	private _productType = ProductType.ALL;

	constructor(private usecase: GetProductsCase, private storage: ProductLocalStorageService) {
		makeAutoObservable(this);

		this.intiProductType();
	}

	get products() {
		return toJS(this._products);
	}

	get isLoading() {
		return toJS(this._isLoading);
	}

	get productType() {
		return toJS(this._productType);
	}

	async getList() {
		this.clearData();

		this._isLoading = true;

		try {
			const response = await this.usecase.execute(this._productType);

			runInAction(() => {
				this._products = response;
			});
		} finally {
			runInAction(() => {
				this._isLoading = false;
			});
		}
	}

	async changeFilter(type: ProductType) {
		if (this._productType !== type) {
			this._productType = type;

			this.storage.setProductType(type);

			await this.getList();
		}
	}

	private intiProductType() {
		const productTypeFromStorage = this.storage.getProductType();

		if (productTypeFromStorage && Object.values(ProductType).includes(productTypeFromStorage)) {
			this._productType = productTypeFromStorage;
		} else {
			this._productType = ProductType.ALL;
			this.storage.setProductType(ProductType.ALL);
		}

	}

	private clearData() {
		if (this._isLoading) {
			this._isLoading = false;
		}

		if (this._products.length) {
			this._products = [];
		}
	}
}
