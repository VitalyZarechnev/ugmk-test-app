import { FC, useMemo } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import merge from 'lodash/merge';

type ChartProps = HighchartsReact.Props;

const Chart: FC<ChartProps> = (props) => {
	const { options, ...rest } = props;

	const defaultOptions = {
		boost: {
			enabled: true,
			useGPUTranslations: true
		},
		accessibility: {
			enabled: false
		},
		title: {
			text: ''
		},
		xAxis: {
			title: {
				text: ''
			}
		},
		yAxis: {
			title: {
				text: ''
			}
		},
		plotOptions: {
			pie: {
				cursor: 'pointer',
				dataLabels: {
					connectorWidth: 0,
					formatter: function () {
						return (
							'<span style="color: ' + this.color + '">' + this.y + '</span>'
						);
					}
				},
				showInLegend: true
			},
			column: {
				cursor: 'pointer',
			}
		},
		legend: {
			symbolRadius: 0,
			labelFormatter: function () {
				return '<span style="color: ' + this.color + '">' + this.name + '</span>';
			}
		}
	} as Highcharts.Options;

	const fullOptions = useMemo(() => merge(defaultOptions, options), [options]);

	return (
		<HighchartsReact
			highcharts={Highcharts}
			options={fullOptions}
			{...rest}
		/>
	);
}

export default Chart;
