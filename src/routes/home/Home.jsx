import React from "react";
import styles from './Home.module.scss';
import TimesheetTable from '../../containers/TimesheetTable';
import { 
  Header, 
  TimesheetFilters, 
  TimesheetPagination,
  TimesheetRate,
  ToolNav
} from "../../components";

function Home() {
  return (
    <div className={styles.container}>
      <Header title="Mes entrées" />
      <main className="homepage-content">
        <div className={`select u-margin-b-2 u-margin-t-4 ${styles.select}`}>
          <select name="dateFilter" id="dateFilter">
            <option value="week">Cette semaine</option>
            <option value="today">Aujourd'hui</option>
            <option value="month">Ce mois-ci</option>
            <option value="month-3">Ces 3 derniers mois</option>
            <option value="year">Cette année</option>
          </select>
        </div>

        <TimesheetRate />

        <section className={styles.timesheets_container}>
          <TimesheetFilters>
            <TimesheetPagination>
              <TimesheetTable />
            </TimesheetPagination>
          </TimesheetFilters>
        </section>

        <ToolNav />
      </main>
    </div>
  )
}

export default Home;