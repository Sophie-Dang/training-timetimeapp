import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import styles from './ToolNav.module.scss';

function ToolNav({type}) {
  return (
    <aside className={`tool-nav ${styles.toolnav}`}>
      <div className="u-relative">
        <div className={`tool-nav-buttons ${styles.toolnav_buttons}`}>
          <button className="tool-nav-buttons__button button func-button"><img src="./images/event.svg" alt="Voir les évènments" /></button>
          <button className="tool-nav-buttons__button button func-button u-padding-r-0 tool-nav-buttons__button--big"><img src="./images/add.svg" alt="Ajouter un timesheet" /></button>
        </div>
        <div className={`tool-nav-infos jauge ${styles.toolnav_infos}`}>
          <p className="tool-nav-infos__text jauge__text">Temps timesheeté <span className="t-weight-600">%CURRENT_TOTAL_TIME%</span></p>
          <ProgressBar />
        </div>
      </div>
    </aside>
  )
}

export default ToolNav;