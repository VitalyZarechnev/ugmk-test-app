import { observer } from 'mobx-react-lite';
import { FC, useEffect, useCallback, useMemo } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { useErrorBoundary } from 'react-error-boundary';

import { ProductType } from '@/modules/products/types/products';
import EmptyBox from '@/components/empty/EmptyBox.tsx';
import View from './view/ProductsView.tsx';
import { ProductsViewModel } from './viewModel';
import { getProductsChartData } from './helper.ts';

interface Props {
	viewModel: ProductsViewModel;
}

const ViewController: FC<Props> = ({ viewModel }) => {
	const { showBoundary } = useErrorBoundary();

	useEffect(() => {
		(async () => {
			try {
				await viewModel.getList();
			} catch (e) {
				showBoundary(e)
			}
		})();
	}, []);

	const handleChangeFilter = useCallback(async (event: SelectChangeEvent<ProductType>) => {
		await viewModel.changeFilter(event.target.value as ProductType);
	}, [viewModel]);

	const chartData = useMemo(() => getProductsChartData(viewModel.products), [viewModel.products]);

	return (
		<>
			{viewModel.products.length ?
				<View
					chartData={chartData}
					isLoading={viewModel.isLoading}
					productType={viewModel.productType}
					changeFilter={handleChangeFilter}
				/> :
				<EmptyBox />
			}
		</>);
};

export default observer(ViewController);
