import { makeAutoObservable, runInAction, toJS } from 'mobx';

import { ProductModel } from '@/modules/products/domain/models/ProductModel';
import { GetDetailsCase } from '@/modules/products/domain/usecases/GetDetailsCase';

export class DetailsViewModel {
	private _details: ProductModel[] = [];
	private _isLoading = false;

	constructor(private usecase: GetDetailsCase) {
		makeAutoObservable(this);
	}

	get details() {
		return toJS(this._details);
	}

	get isLoading() {
		return toJS(this._isLoading);
	}

	async getDetails(factoryId: number, monthId: number) {
		this.clearData();

		this._isLoading = true;

		try {
			const response = await this.usecase.execute(factoryId, monthId);

			runInAction(() => {
				this._details = response;
			});
		} finally {
			runInAction(() => {
				this._isLoading = false;
			});
		}
	}

	private clearData() {
		if (this._isLoading) {
			this._isLoading = false;
		}

		if (this._details.length) {
			this._details = [];
		}
	}
}
