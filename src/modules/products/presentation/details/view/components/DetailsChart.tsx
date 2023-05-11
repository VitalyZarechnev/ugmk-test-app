import { FC, useMemo } from 'react';
import { Options } from 'highcharts';
import { amber, green, red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';

import { IDetailsChartData } from '@/modules/products/presentation/details/interfaces/IDetailsChartData';
import Chart from '@/components/chart/Chart';
import { ProductName } from '@/modules/products/types/products';
import { formatFactoryIdToName } from '@/modules/products/format';

interface IDetailsChartProps {
	chartData: IDetailsChartData,
}

const DetailsChart: FC<IDetailsChartProps> = ({ chartData }) => {

	const options = useMemo(() => (
		{
			chart: {
				type: 'pie',
			},
			colors: [green[500], amber[500], red[300]],
			series: [{
				name: 'Продукты',
				colorByPoint: true,
				data: [
					{
						name: ProductName.PRODUCT_1,
						y: chartData.product1,
					},
					{
						name: ProductName.PRODUCT_2,
						y: chartData.product2,
					},
					{
						name: ProductName.PRODUCT_3,
						y: chartData.product3,
					}
				]
			}]
		} as Options
	), [chartData]);

	return (
		<div>
			<Typography variant="h4" fontWeight="bold">
				{`Статистика по продукции фабрики ${formatFactoryIdToName(chartData.factoryId)} за ${chartData.month}`}
			</Typography>
			<Chart options={options} />
		</div>
	);
}

export default DetailsChart;
