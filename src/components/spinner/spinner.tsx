import { type FC } from 'react';

import styles from './spinner.module.css';

interface Props {
  className?: string;
}

export const Spinner: FC<Props> = () => {
  return <div className={styles.spinner} />;
};
