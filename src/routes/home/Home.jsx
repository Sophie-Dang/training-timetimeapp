import React from "react";
import styles from './Home.module.scss';
import TimesheetTable from '../../containers/TimesheetTable';
import TimesheetPagination from '../../containers/TimesheetPagination';
import { 
  Header, 
  TimesheetFilters, 
  TimesheetRate,
  ToolNav
} from "../../components";
import Select from "../../containers/Select";

function Home() {
  const dateFilterOptions = [
    {value: 'week', label: 'Cette semaine'},
    {value: 'today', label: 'Aujourd\'hui'},
    {value: 'month', label: 'Ce mois-ci'},
    {value: 'month-3', label: 'Ces 3 derniers mois'},
    {value: 'year', label: 'Cette année'},
  ]

  const handleSelect = (evt) => {
    // console.log(evt.currentTarget.value);
  }

  return (
    <div className={`u-flex u-flex-column ${styles.container}`}>
      <Header title="Mes entrées" />
      <main className="homepage-content u-flex u-flex-column u-fill-space">
        <div className={` u-margin-b-2 u-margin-t-4 ${styles.select}`}>
          <Select id={'dateFilter'} name={'date_filter'} options={dateFilterOptions} optionDefault={'week'} handleChange={handleSelect} />
        </div>

        <TimesheetRate />

        <section className={`u-flex u-flex-column u-fill-space ${styles.timesheets_container}`}>
          <TimesheetPagination>
            <TimesheetFilters>
              <TimesheetTable />
            </TimesheetFilters>
          </TimesheetPagination>
        </section>

        <ToolNav />
      </main>
    </div>
  )
}

export default Home;