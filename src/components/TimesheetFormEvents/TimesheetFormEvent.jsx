import React from "react";
import Card from "../../containers/Card";
import styles from "./TimesheetFormEvent.module.scss";

function TimesheetFormEvent({
  eventListGoogle,
  eventListZoho,
  toggleAccordion,
}) {

  const handleClick = (e) => {
    toggleAccordion({
      target: e.currentTarget.id,
      classClose: styles.content_close,
      classChevron: styles.chevron_down,
      type: 'show-all',
    });
  }

  return (
    <Card id={'formEvent'}>
      <div className={`${styles.container}`}>
        <div className={styles.container_scroll}>
          <div>
            <p className={`u-padding-b-2 t-weight-600 t-base-large ${styles.title}`} id={'event-google'} onClick={handleClick}>
              Google Agenda 
              <img src="/images/chevron.svg" alt="chevron" className={`${styles.chevron} ${styles.chevron_down}`} id={`chevron-event-google`} />
            </p>
            <ul className={`${styles.content}`}>
              { eventListGoogle.map(data => 
                <li className={`c-gray-70 u-padding-2 ${styles.content_list}`} data-id={data.id} key={`google-event-${data.id}`}>
                  <p className="t-weight-600">{data.title}</p>
                  <time>{data.date}</time>
                  <div className="u-flex u-margin-t-2">
                    <button type="button" className="button u-margin-r-2 t-weight-600">Timesheeter</button>
                    <button type="button" className="button c-gray-50 bg-gray-20 t-weight-600">Masquer</button>
                  </div>
                </li>
              )}
            </ul>
          </div>
          <div className="u-margin-t-2">
            <p className={`u-padding-b-2 t-weight-600 t-base-large ${styles.title}`} id={'event-zoho'} onClick={handleClick}>
              Zoho
              <img src="/images/chevron.svg" alt="chevron" className={`${styles.chevron} ${styles.chevron_down}`} id={`chevron-event-zoho`} />
            </p>
            <ul className={`${styles.content}`}>
              { eventListZoho.map(data => 
                <li className={`c-gray-70 u-padding-2 ${styles.content_list}`} data-id={data.id} key={`zoho-event-${data.id}`}>
                  <p className="t-weight-600">{data.title} | {data.task}</p>
                  <time>{data.date}</time>
                  <div className="u-flex u-margin-t-2">
                    <button type="button" className="button u-margin-r-2 t-weight-600">Timesheeter</button>
                    <button type="button" className="button c-gray-50 bg-gray-20 t-weight-600">Masquer</button>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default TimesheetFormEvent;