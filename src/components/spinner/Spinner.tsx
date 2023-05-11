import { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import styles from './Spinner.module.scss';

const Spinner: FC = () => {
  return (
    <div className={styles.spinner}>
      <CircularProgress />
    </div>
  );
}

export default Spinner;
