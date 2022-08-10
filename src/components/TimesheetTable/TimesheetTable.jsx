import React from "react";
import { timesheetsDatas } from "../../store/datas/dataList";
import styles from './TimesheetTable.module.scss';

function TimesheetTable({toggleAccordion}) {
  const handleClick = (target) => {
    toggleAccordion({
      target: target.id,
      classClose: styles.close,
      classChevron: styles.chevron_down,
    });
  }

  return (
    <div className={`timesheets-table u-fill-space ${styles.table}`}>
      <ul>
        {timesheetsDatas.map((timesheet, key) => (
          <li className={`${styles.table_row} ${styles.close}`} onClick={(evt) => handleClick(evt.currentTarget)} id={key} key={timesheet.clientName + key}>
            <div className={`t-weight-500 ${styles.table_row_content}`}>
              <div>
                <p>{timesheet.clientName}</p>
                <div className={styles.infos}>
                  <span className="t-align-center">{timesheet.time}</span>
                  <time>{timesheet.date}</time>
                </div>
              </div>
              <div className="u-flex u-align-items-center">
                <button className={`button func-button ${styles.edit}`}><img src="./images/edit.svg" alt="Modifier le timesheet" /></button>
                <img className={styles.chevron} id={`chevron-${key}`} src="./images/chevron.svg" alt="Ouvrir le détail" />
              </div>
            </div>
            <ul className={`${styles.table_row_details}`}>
              <li><span className="t-weight-600 c-gray-70 u-padding-r-1">Client : </span>{timesheet.clientName}</li>
              <li><span className="t-weight-600 c-gray-70 u-padding-r-1">Projet : </span>{timesheet.projectName}</li>
              <li><span className="t-weight-600 c-gray-70 u-padding-r-1">Temps passé : </span>{timesheet.time}</li>
              <li><span className="t-weight-600 c-gray-70 u-padding-r-1">Date : </span>{timesheet.date}</li>
              <li><span className="t-weight-600 c-gray-70 u-padding-r-1">Tâches : </span>{timesheet.task}</li>
            </ul>
          </li>
        ))}

      </ul>
    </div>
  )
}

export default TimesheetTable;