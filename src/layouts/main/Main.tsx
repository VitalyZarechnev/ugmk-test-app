import { FC } from 'react';

import Header from './header/Header';
import styles from './Main.module.scss';

type MainLayoutProps = {
	children: React.ReactNode
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<div className={styles.container}>
					{children}
				</div>
			</main>
		</>
	)
}

export default MainLayout;
