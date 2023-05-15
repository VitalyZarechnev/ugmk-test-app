import { observer } from 'mobx-react-lite';
import { FC, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useErrorBoundary } from 'react-error-boundary';

import View from './view/ProductsView.tsx';
import { DetailsViewModel } from './viewModel';
import { getDetailsChartData } from './helper.ts';

interface Props {
	viewModel: DetailsViewModel;
}

const ViewController: FC<Props> = ({ viewModel }) => {
	const { showBoundary } = useErrorBoundary();

	const params = useParams<{ factoryId: string; monthId: string }>();
	const factoryId = parseInt(params.factoryId as string);
	const monthId = parseInt(params.monthId as string);

	useEffect(() => {
		(async () => {
			try {
				await viewModel.getDetails(factoryId, monthId);
			} catch (e) {
				showBoundary(e)
			}
		})();
	}, []);

	const chartData = useMemo(() => getDetailsChartData(viewModel.details, factoryId, monthId), [viewModel.details, factoryId, monthId])

	return (<View chartData={chartData} isLoading={viewModel.isLoading} isEmpty={!viewModel.details.length} />);
};

export default observer(ViewController);
