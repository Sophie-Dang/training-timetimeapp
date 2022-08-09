import React from "react";
import styles from './TimesheetRateBlock.module.scss';

function TimesheetRateBlock({description, rate, background}) {
  return (
    <div className={`u-fill-space bg-${background} ${styles.block}`}>
      <p className="u-margin-b-1 t-base-xsmall">{description}</p>
      <span className="t-weight-700">{rate}</span>
    </div>
  )
}

export default TimesheetRateBlock;