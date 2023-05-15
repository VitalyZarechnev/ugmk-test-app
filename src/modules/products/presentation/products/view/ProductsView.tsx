import { FC } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';

import { IProductsChartData } from "@/modules/products/presentation/products/interfaces/IProductsChartData";
import Filter from '@/modules/products/presentation/products/view/components/Filter/Filter';
import { ProductType } from '@/modules/products/types/products';
import ProductsChart from './components/Chart/ProductsChart';
import EmptyBox from '@/components/empty/EmptyBox.tsx';
import Spinner from '@/components/spinner/Spinner';
import styles from './ProductsView.module.scss';

interface Props {
	isEmpty: boolean;
	isLoading: boolean;
	productType: ProductType;
	chartData: IProductsChartData;
	changeFilter: (event: SelectChangeEvent<ProductType>) => void;
}

const ListView: FC<Props> = ({ chartData, productType, changeFilter, isLoading, isEmpty }) => {
	const renderComponent = () => {
		if (isLoading) {
			return <Spinner />
		} else if (isEmpty) {
			return <EmptyBox />
		} else {
			return (
				<>
					<Filter value={productType} onChange={changeFilter} disabled={isLoading} />
					<ProductsChart data={chartData} />
				</>
			)
		}
	}

	return (
		<div className={styles.wrapper}>
			{renderComponent()}
		</div>
	);
};

export default ListView;
