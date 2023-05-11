import { FC } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { ProductType } from '@/modules/products/types/products';
import { options } from './options';
import styles from './Filter.module.scss';

type ProductTypeSelectProps = {
	value: ProductType,
	disabled: boolean,
	onChange: (event: SelectChangeEvent<ProductType>) => void,
};

const ProductTypeSelect: FC<ProductTypeSelectProps> = ({ value, disabled, onChange }) => {
	return (
		<Box className={styles.wrapper}>
			<Typography variant="body1">Фильтр по типу продукции</Typography>
			<FormControl size="small" className={styles.form}>
				<Select id="productType" value={value} disabled={disabled} onChange={onChange}>
					{options.map((option) => (
						<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
}

export default ProductTypeSelect;
