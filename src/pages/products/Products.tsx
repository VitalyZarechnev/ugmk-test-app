import { FC } from 'react';
import { ErrorBoundary } from "react-error-boundary";

import MainLayout from '@/layouts/main/Main';
import { ProductsProvider } from '@/modules/products';
import Fallback from '@/components/fallback/Fallback';

export const Products: FC = () => {
	return (
		<MainLayout>
			<ErrorBoundary FallbackComponent={Fallback}>
				<ProductsProvider />
			</ErrorBoundary>
		</MainLayout >
	);
};

export default Products;
