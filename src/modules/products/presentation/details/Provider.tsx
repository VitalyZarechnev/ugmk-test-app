import { FC } from 'react';

import { ProductsDataSourceImpl } from '@/modules/products/data/ProductsDataSourceImpl';
import { ProductsRepositoryImpl } from '@/modules/products/data/repository';
import { ProductStorage } from '@/utils/storage/ProductStorageSingletone';
import { GetDetailsCase } from '@/modules/products/domain/usecases/GetDetailsCase';
import { DetailsViewModel } from './viewModel';

import ViewController from './ViewController';

const dataSource = new ProductsDataSourceImpl(ProductStorage);
const repository = new ProductsRepositoryImpl(dataSource);
const usecase = new GetDetailsCase(repository);
const viewModel = new DetailsViewModel(usecase);

const Provider: FC = () => {
	return (
		<ViewController viewModel={viewModel} />
	);
};

export default Provider;
