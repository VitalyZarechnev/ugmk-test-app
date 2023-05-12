import { ProductModel } from "@/modules/products/domain/models/ProductModel";
import { IProductsChartData } from "@/modules/products/presentation/products/interfaces/IProductsChartData";
import { getMonth } from "@/utils/date";
import { formatWeight } from "@/utils/format";
import mapValues from 'lodash/mapValues';

export const getProductsChartData = (data: ProductModel[]): IProductsChartData => {
	const chartData: IProductsChartData = {};

	data?.forEach((item) => {
		if (!chartData[item?.factory_id]) {
			chartData[item.factory_id] = (new Array(12)).fill(0);
		}

		chartData[item.factory_id][getMonth(item.date)] += (item.product1 + item.product2 + item.product3);
	});
	
	return mapValues(chartData, factoryValue => factoryValue.map(product => formatWeight(product)));
};