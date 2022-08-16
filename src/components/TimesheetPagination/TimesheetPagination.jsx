import React from 'react';
import Proptypes from 'prop-types';
import ChildElement from '../utils/ChildElement';
import styles from './TimesheetPagination.module.scss';

function TimesheetPagination({
  children,
  totalTimesheet,
  firstTimesheetIndex,
  lastTimesheetIndex,
  currentPage,
  pageSize,
  setPageSize,
  nextPage,
  prevPage,
  firstPage,
  lastPage,
}) {
  
  return (
    <>
    <div className="timesheets-pagination u-flex u-justify-content-space-between u-align-items-center t-base-xsmall u-margin-b-2">
      <p>Affichage des entrées <br/> de <span className="t-weight-600">{firstTimesheetIndex}</span> à <span className="t-weight-600">{lastTimesheetIndex}</span> sur <span className="t-weight-600 c-moutarde">{totalTimesheet}</span></p>
      <div className="timesheets-pagination__page u-flex u-justify-content-space-between">
        <div>
          <button className={`button func-button u-inline-block u-padding-0 ${styles.flipButton}`} onClick={firstPage}><img src="./images/chevron-double.svg" alt="première page" /></button>
          <button className={`button func-button u-inline-block u-padding-0 u-margin-l-1 ${styles.flipButton}`} onClick={prevPage}><img src="./images/chevron.svg" alt="page précèdente" /></button>
        </div>
        <span className="u-margin-x-2">{currentPage}</span>
        <div>
          <button className="button func-button u-inline-block u-padding-0" onClick={nextPage}><img src="./images/chevron.svg" alt="page suivante" /></button>
          <button className="button func-button u-inline-block u-padding-0 u-margin-l-1" onClick={lastPage}><img src="./images/chevron-double.svg" alt="dernière page" /></button>
        </div>
      </div>
      <div className={`select ${styles.select}`}>
        <select name="datasNumberToDisplay" id="datasNumberToDisplay" onChange={(evt) => setPageSize({pageSize: evt.currentTarget.value})} defaultValue={pageSize}>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="3">3</option>
          <option value="2">2</option>
        </select>
      </div>
    </div>
    <ChildElement childrenProp={children} stateObj={{}} />
    </>
  )
}

TimesheetPagination.propTypes = {
  children: Proptypes.any,
  totalTimesheet: Proptypes.number.isRequired,
  firstTimesheetIndex: Proptypes.number.isRequired,
  lastTimesheetIndex: Proptypes.number.isRequired,
  currentPage: Proptypes.number.isRequired,
  pageSize: Proptypes.number.isRequired,
  setPageSize: Proptypes.func.isRequired,
  nextPage: Proptypes.func.isRequired, 
  prevPage: Proptypes.func.isRequired, 
  firstPage: Proptypes.func.isRequired, 
  lastPage: Proptypes.func.isRequired, 
};

export default TimesheetPagination;