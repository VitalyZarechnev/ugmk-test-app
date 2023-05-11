import { FC } from 'react';
import Box from '@mui/material/Box';

import styles from './EmptyBox.module.scss'

const EmptyBox: FC = () => {
  return (
    <Box className={styles.empty}>
      Ничего не найдено
    </Box>
  );
}

export default EmptyBox;
