import { ReactNode, type FC, HTMLProps } from 'react';

import classNames from 'classnames';

import styles from './button.module.css';
import { Spinner } from '../spinner/spinner';

interface Props extends HTMLProps<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  isLoading?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: FC<Props> = ({ className, children, isLoading = false, ...props }) => {
  return (
    <button className={classNames(className, styles.root)} {...props}>
      {isLoading ? (
        <div className={styles.loadingContainer}>
          <Spinner />
          <span>Loading</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};
