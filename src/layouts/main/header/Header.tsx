import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate, useLocation } from 'react-router-dom';

import styles from './Header.module.scss'

const Header: React.FC = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const isMainPage = location.pathname === '/';

	const goToMain = (): void => {
		navigate('/');
	};

	return (
		<AppBar position="static" color="transparent">
			<Toolbar className={styles.header}>
				<Typography variant="h5">
					UGMK
				</Typography>
				{!isMainPage && <Button variant="outlined" size="medium" onClick={goToMain}>На главную</Button>}
			</Toolbar>
		</AppBar>
	);
}

export default Header;
