import React from 'react';
import Proptypes from 'prop-types';
import styles from './InputBoolean.module.scss';

function InputBoolean({values, labels, isActive, toggleButton}) {
  const classes = {
    button: isActive === true ? styles.active : '',
    container: isActive === true ? styles.container_active : '',
    paddingLeft: isActive === true ? 'pouet' : 'u-padding-l-2',
  };

  return (
    <div className={styles.container}>
        <div className={`${styles.button_container} ${classes.container}`} onClick={toggleButton}>
          <span className={classes.button}></span>
          <span className={`t-base-xsmall t-weight-500 ${classes.paddingLeft}`}>{isActive === true ? labels.left : labels.right}</span>
        </div>
        <div className={styles.left}>
            <input className={styles.input} type="radio" name="button-boolean" id="left" value={values.left} checked={isActive} readOnly />
        </div>
        <div className={styles.right}>
            <input className={styles.input} type="radio" name="button-boolean" id="right" value={values.right} checked={!isActive} readOnly  />
        </div>
    </div>
  )
}

InputBoolean.propTypes = {
  values: Proptypes.object.isRequired,
  labels: Proptypes.object.isRequired,
}

export default InputBoolean;