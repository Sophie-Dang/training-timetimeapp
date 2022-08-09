import React, { useState } from 'react';
import ChildElement from '../utils/ChildElement';
import styles from './TimesheetPagination.module.scss';

function TimesheetPagination({children}) {
  const [paginationState, setPaginationState] = useState({
    datasNumber: 0,
    pageNumber: 1,
  })

  return (
    <>
    <div className="timesheets-pagination u-flex u-justify-content-space-between u-align-items-center t-base-xsmall u-margin-b-2">
      <p>Affichage des entrées <br/> de <span className="t-weight-600">0</span> à <span className="t-weight-600">100</span> sur <span className="t-weight-600 c-moutarde">513</span></p>
      <div className="timesheets-pagination__page u-flex u-justify-content-space-between">
        <div>
          <button className={`button func-button u-inline-block u-padding-0 ${styles.flipButton}`}><img src="./images/chevron-double.svg" alt="première page" /></button>
          <button className={`button func-button u-inline-block u-padding-0 u-margin-l-1 ${styles.flipButton}`}><img src="./images/chevron.svg" alt="page précèdente" /></button>
        </div>
        <span className="u-margin-x-2">1</span>
        <div>
          <button className="button func-button u-inline-block u-padding-0"><img src="./images/chevron.svg" alt="page suivante" /></button>
          <button className="button func-button u-inline-block u-padding-0 u-margin-l-1"><img src="./images/chevron-double.svg" alt="dernière page" /></button>
        </div>
      </div>
      <div className={`select ${styles.select}`}>
        <select name="datasNumberToDisplay" id="datasNumberToDisplay" onChange={(evt) => setPaginationState({...paginationState, datasNumber: evt.currentTarget.value})}>
          <option value="100">100</option>
          <option value="200">200</option>
        </select>
      </div>
    </div>
    <ChildElement childrenProp={children} stateObj={paginationState} />
    </>
  )
}

export default TimesheetPagination;