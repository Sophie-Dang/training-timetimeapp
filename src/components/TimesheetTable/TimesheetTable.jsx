import React, { useEffect } from "react";
import Proptypes from 'prop-types';
import styles from './TimesheetTable.module.scss';

function TimesheetTable({
  toggleAccordion, // reducer props
  timesheetList, // reducer props
  setTimesheetList, // reducer props
  currentPage, // reducer props
  pageSize, // reducer props
}) {

  useEffect(() => {
    setTimesheetList({pageSize: pageSize});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSize, currentPage])
  
  
  const handleClick = (target) => {
    toggleAccordion({
      target: target.id,
      classClose: styles.close,
      classChevron: styles.chevron_down,
    });
  }

  return (
    <div className={`timesheets-table u-fill-space u-margin-b-3 ${styles.table}`}>
      <ul>
        { timesheetList.map(data => (
          <li className={`${styles.table_row} ${styles.close}`} onClick={(evt) => handleClick(evt.currentTarget)} id={data.id} key={`timesheet-${data.id}`}>
            <div className={`t-weight-500 ${styles.table_row_content}`}>
              <div>
                <p>{data.clientName}</p>
                <div className={styles.infos}>
                  <span className="t-align-center">{data.time}</span>
                  <time>{data.date}</time>
                </div>
              </div>
              <div className="u-flex u-align-items-center">
                <button className={`button func-button ${styles.edit}`}><img src="./images/edit.svg" alt="Modifier le timesheet" /></button>
                <img className={styles.chevron} id={`chevron-${data.id}`} src="./images/chevron.svg" alt="Ouvrir le détail" />
              </div>
            </div>
            <ul className={`${styles.table_row_details}`}>
              <li><span className="t-weight-600 c-gray-70 u-padding-r-1">Client : </span>{data.clientName}</li>
              <li><span className="t-weight-600 c-gray-70 u-padding-r-1">Projet : </span>{data.projectName}</li>
              <li><span className="t-weight-600 c-gray-70 u-padding-r-1">Temps passé : </span>{data.time}</li>
              <li><span className="t-weight-600 c-gray-70 u-padding-r-1">Date : </span>{data.date}</li>
              <li><span className="t-weight-600 c-gray-70 u-padding-r-1">Tâches : </span>{data.task}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

TimesheetTable.propTypes = {
  toggleAccordion: Proptypes.func.isRequired,
  timesheetList: Proptypes.array.isRequired,
  setTimesheetList: Proptypes.func.isRequired,
  currentPage: Proptypes.number.isRequired,
  pageSize: Proptypes.number.isRequired
};

export default TimesheetTable;