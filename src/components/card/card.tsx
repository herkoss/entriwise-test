import { type ReactNode, type FC } from 'react';

import classNames from 'classnames';

import styles from './card.module.css';

interface Props {
  className?: string;
  children?: ReactNode;
}

export const Card: FC<Props> = ({ className, children }) => {
  return <div className={classNames(className, styles.root)}>{children}</div>;
};
