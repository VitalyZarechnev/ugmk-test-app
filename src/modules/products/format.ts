import { FactoryId, FactoryName } from '@/modules/products/types/factory';

export const formatFactoryIdToName = (value: number | null) => {
	switch (value) {
		case FactoryId.FACTORY_A:
			return FactoryName.FACTORY_A;
		case FactoryId.FACTORY_B:
			return FactoryName.FACTORY_B;
		case FactoryId.FACTORY_C:
			return FactoryName.FACTORY_C;
		default:
			return '';
	}
};
