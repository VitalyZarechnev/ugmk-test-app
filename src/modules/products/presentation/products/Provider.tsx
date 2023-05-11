import { FC } from 'react';

import { ProductsDataSourceImpl } from '@/modules/products/data/ProductsDataSourceImpl';
import { ProductsRepositoryImpl } from '@/modules/products/data/repository';
import { ProductStorage } from '@/utils/storage/ProductStorageSingletone';
import { GetProductsCase } from '@/modules/products/domain/usecases/GetProductsCase';
import { ProductsViewModel } from './viewModel';
import { productLocalStorageService } from '@/services/localstorage/Service';

import ViewController from './ViewController';

const dataSource = new ProductsDataSourceImpl(ProductStorage);
const repository = new ProductsRepositoryImpl(dataSource);
const usecase = new GetProductsCase(repository);
const viewModel = new ProductsViewModel(usecase, productLocalStorageService);

const Provider: FC = () => {
	return (
		<ViewController viewModel={viewModel} />
	);
};

export default Provider;
