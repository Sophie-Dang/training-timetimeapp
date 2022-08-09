
import React, { useEffect, useState } from 'react';
import styles from './InputBoolean.module.scss';

function InputBoolean({values, labels}) {

  const [click, setClick] = useState(false);
  const [isActive, setIsActive] = useState({
    button: '',
    container: '',
    additionalClass: 'u-padding-l-2',
  });
  const [check, setCheck] = useState({
    left: false,
    right: true,
  });

  useEffect(() => {
    setCheck({
      ...check, 
      left: !check.left,
      right: !check.right,
    });

    if (check.left === true) {
      setIsActive({
        ...isActive,
        button: styles.active,
        container: styles.container_active,
        additionalClass: '',
      });
    } 
    else {
      setIsActive({
        ...isActive, 
        button: '', 
        container: '',
        additionalClass: 'u-padding-l-2',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click])
  

  return (
    <div className={styles.container}>
        <div className={`${styles.button_container} ${isActive.container}`} onClick={() => setClick(!click)}>
          <span className={isActive.button}></span>
          <span className={`t-base-xsmall t-weight-500 ${isActive.additionalClass}`}>{check.left === true ? labels.left : labels.right}</span>
        </div>
        <div className={styles.left}>
            <input className={styles.input} type="radio" name="button-boolean" id="left" value={values.left} checked={check.left} readOnly />
        </div>
        <div className={styles.right}>
            <input className={styles.input} type="radio" name="button-boolean" id="right" value={values.right} checked={check.right} readOnly  />
        </div>
    </div>
  )
}

export default InputBoolean;