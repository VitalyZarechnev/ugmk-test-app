import { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import MainLayout from '@/layouts/main/Main';
import { DetailsProvider } from '@/modules/products';
import Fallback from '@/components/fallback/Fallback';

export const Products: FC = () => {
	return (
		<MainLayout>
			<ErrorBoundary FallbackComponent={Fallback}>
				<DetailsProvider />
			</ErrorBoundary>
		</MainLayout >
	);
};

export default Products;
