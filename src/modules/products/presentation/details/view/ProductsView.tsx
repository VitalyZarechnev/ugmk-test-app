import { FC } from 'react';

import { IDetailsChartData } from '@/modules/products/presentation/details/interfaces/IDetailsChartData';
import Spinner from '@/components/spinner/Spinner';
import EmptyBox from '@/components/empty/EmptyBox.tsx';
import DetailsChart from './components/DetailsChart';
import styles from './ProductsView.module.scss';

interface Props {
	isLoading: boolean;
	isEmpty: boolean;
	chartData: IDetailsChartData;
}

const ProductsView: FC<Props> = ({ chartData, isEmpty, isLoading }) => {
	const renderComponent = () => {
		if (isLoading) {
			return <Spinner />
		} else if (isEmpty) {
			return <EmptyBox />
		} else {
			return <DetailsChart chartData={chartData} />
		}
	}
	
	return (
		<div className={styles.wrapper}>
			{renderComponent()}
		</div>
	);
};

export default ProductsView;
