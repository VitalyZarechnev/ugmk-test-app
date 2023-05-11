import { FC, useMemo, useCallback } from 'react';
import { Options } from 'highcharts';
import { useNavigate } from 'react-router-dom';
import { red, blue } from '@mui/material/colors';

import { IProductsChartData } from "@/modules/products/presentation/products/interfaces/IProductsChartData";
import Chart from '@/components/chart/Chart';
import { FactoryId, FactoryName } from '@/modules/products/types/factory';
import { MONTHS } from '@/utils/constants';
import styles from './ProductsChart.module.scss';

interface ProductsChartProps {
	data: IProductsChartData,
}

const ProductsChart: FC<ProductsChartProps> = ({ data }) => {
	const navigate = useNavigate();

	const handleFactoryClick = useCallback((monthIndex: number, factoryId: number) => {
		navigate(`/details/${factoryId}/${monthIndex + 1}`);
	}, [navigate])

	const options = useMemo(() => (
		{
			chart: {
				type: 'column',
			},
			yAxis: {
				title: {
					text: 'Тонны'
				}
			},
			xAxis: {
				categories: MONTHS,
			},
			colors: [red[800], blue[900]],
			series: [{
				name: `Фабрика ${FactoryName.FACTORY_A}`,
				events: { click: ({ point }) => handleFactoryClick(point.x, FactoryId.FACTORY_A) },
				data: data[FactoryId.FACTORY_A],
			}, {
				name: `Фабрика ${FactoryName.FACTORY_B}`,
				events: { click: ({ point }) => handleFactoryClick(point.x, FactoryId.FACTORY_B) },
				data: data[FactoryId.FACTORY_B],
			}],
		} as Options
	), [handleFactoryClick, data]);

	return (
		<div className={styles.chart}>
			<Chart options={options} />
		</div>
	);
}

export default ProductsChart;
