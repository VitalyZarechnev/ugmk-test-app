import { FC } from 'react';
import { FallbackProps } from 'react-error-boundary';
import Typography from '@mui/material/Typography';

import styles from './Fallback.module.scss';

const Fallback: FC<FallbackProps> = ({ error }) => {
	return (
		<div className={styles.fallback}>
			<Typography variant="h5">Ошибка</Typography>
			<Typography variant="body1">
				{error.message}
			</Typography>
		</div>
	);
};

export default Fallback;
