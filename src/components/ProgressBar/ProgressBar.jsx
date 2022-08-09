import React from 'react';
import styles from './ProgressBar.module.scss';

function ProgressBar() {
  return (
    <div className={styles.progressbar}>
      <div className={styles.progressbar_progress} role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={20}></div>
      <span className={styles.progressbar_text}>3h00 / 7h30 (20.0%)</span>
    </div>
  )
}

export default ProgressBar;