import { FC } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';

import { IProductsChartData } from "@/modules/products/presentation/products/interfaces/IProductsChartData";
import Filter from '@/modules/products/presentation/products/view/components/Filter/Filter';
import ProductsChart from './components/Chart/ProductsChart';
import { ProductType } from '@/modules/products/types/products';
import Spinner from '@/components/spinner/Spinner';
import styles from './ProductsView.module.scss';

interface Props {
	isLoading: boolean;
	productType: ProductType;
	chartData: IProductsChartData;
	changeFilter: (event: SelectChangeEvent<ProductType>) => void;
}

const ListView: FC<Props> = ({ chartData, productType, changeFilter, isLoading }) => {
	return (
		<div className={styles.wrapper}>
			<Filter value={productType} onChange={changeFilter} disabled={isLoading} />
			{isLoading ? <Spinner /> : <ProductsChart data={chartData} />}
		</div>
	);
};

export default ListView;
