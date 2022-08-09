import React from "react";
import styles from './TimesheetTable.module.scss';

function TimesheetTable() {
  return (
    <div className={`timesheets-table u-fill-space ${styles.table}`}>
      <ul>
        <li className={`timesheets-table-row ${styles.table_row}`}>
          <div className={`timesheets-table-row__content t-weight-500 ${styles.table_row_content}`}>
            <div>
              <p>CosaVostra</p>
              <div className={styles.infos}>
                <span className="t-align-center">7h00</span>
                <time>14/05/2022</time>
              </div>
            </div>
            <div className="u-flex">
              <button className={`button func-button ${styles.edit}`}><img src="./images/edit.svg" alt="Modifier le timesheet" /></button>
              <img className={`timesheets-table-row--close ${styles.chevron}`} src="./images/chevron.svg" alt="Ouvrir le détail" />
            </div>
          </div>
          <ul className="timesheets-table-row__details u-hidden">
            <li><span className="t-weight-600">Client : </span> %CLIENT_NAME%</li>
            <li><span className="t-weight-600">Projet : </span> %PROJECT_NAME%</li>
            <li><span className="t-weight-600">Temps passé : </span> %TIME%</li>
            <li><span className="t-weight-600">Date : </span> %DATE%</li>
            <li><span className="t-weight-600">Tâches : </span> %TASKS%</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default TimesheetTable;