import { ProductModel } from "@/modules/products/domain/models/ProductModel";
import { MONTHS } from "@/utils/constants";
import { IDetailsChartData } from "./interfaces/IDetailsChartData";
import { formatWeight } from "@/utils/format";

export const getDetailsChartData = (data: ProductModel[], factoryId: number, monthId: number): IDetailsChartData => {
	const productsSumm = data.reduce((acc, product) => {
		acc.product1 += product.product1;
		acc.product2 += product.product2;
		acc.product3 += product.product3;

		return acc;
	}, {
		product1: 0,
		product2: 0,
		product3: 0,
	})

	return {
		factoryId,
		month: MONTHS[monthId - 1],
		product1: formatWeight(productsSumm.product1),
		product2: formatWeight(productsSumm.product2),
		product3: formatWeight(productsSumm.product3),
	};
};