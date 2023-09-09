import { type FC } from 'react';

import classNames from 'classnames';

import styles from './navbar.module.css';

interface Props {
  className?: string;
}

export const Navbar: FC<Props> = ({ className }) => {
  return (
    <nav className={classNames(className, styles.root, styles.flex)}>
      <div>Logo</div>
      <ul className={styles.flex}>
        <li className={styles.navItem}>Item 1</li>
        <li className={styles.navItem}>Item 2</li>
        <li className={styles.navItem}>Item 3</li>
        <li className={styles.navItem}>Item 4</li>
      </ul>
    </nav>
  );
};
