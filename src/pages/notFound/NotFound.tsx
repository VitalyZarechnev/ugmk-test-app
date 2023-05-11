import { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import MainLayout from '@/layouts/main/Main';

export const NotFound: FC = () => {
	return (
		<MainLayout>
			<Box>
				<Typography variant="h5">Такой страницы не существует</Typography>
			</Box>
		</MainLayout>
	);
};

export default NotFound;
