import { FC } from 'react';

import { IDetailsChartData } from '@/modules/products/presentation/details/interfaces/IDetailsChartData';
import DetailsChart from './components/DetailsChart';
import Spinner from '@/components/spinner/Spinner';
import styles from './ProductsView.module.scss';

interface Props {
	isLoading: boolean;
	chartData: IDetailsChartData;
}

const ListView: FC<Props> = ({ chartData, isLoading }) => {
	return (
		<div className={styles.wrapper}>
			{isLoading ? <Spinner /> : <DetailsChart chartData={chartData} />}
		</div>
	);
};

export default ListView;
