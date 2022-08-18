import React from "react";
import styles from "./TimesheetFormEvent.module.scss";

function TimesheetFormEvent() {
  return (
    <section>
      <div>
        <p>Google Agenda</p>
        <ul>
          <li>
            <p>Weekly CosaVostra</p>
            <time>Aujourd"hui de 10h15 à 11h00</time>
            <div className="u-flex">
              <button type="button" className="button">Timesheeter</button>
              <button type="button" className="button">Masquer</button>
            </div>
          </li>
          <li>
            <p>Weekly CosaVostra 2</p>
            <time>Aujourd"hui de 10h15 à 11h00</time>
            <div className="u-flex">
              <button type="button" className="button">Timesheeter</button>
              <button type="button" className="button">Masquer</button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default TimesheetFormEvent;