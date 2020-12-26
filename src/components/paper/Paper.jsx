import React from 'react';
import styles from './paper.module.scss';

const Paper = ({ children }) => {
  return <div className={styles.paper}>{children}</div>;
};

export default Paper;
