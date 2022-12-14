import React from "react";
import styles from './Home.module.scss';
import TimesheetTable from '../../containers/TimesheetTable';
import TimesheetPagination from '../../containers/TimesheetPagination';
import { 
  Header, 
  TimesheetFilters, 
  TimesheetRate,
} from "../../components";
import Select from "../../containers/Select";
import TimesheetFormEvent from "../../containers/TimesheetFormEvent";
import ToolNav from "../../containers/ToolNav";

function Home({
  types,
  setType,
  templates,
  setTemplate,
}) {
  const dateFilterOptions = [
    {value: 'week', label: 'Cette semaine'},
    {value: 'today', label: 'Aujourd\'hui'},
    {value: 'month', label: 'Ce mois-ci'},
    {value: 'month-3', label: 'Ces 3 derniers mois'},
    {value: 'year', label: 'Cette année'},
  ]

  setType({type: types.simple});
  setTemplate({template: templates.default});

  const handleSelect = (evt) => {
    // console.log(evt.currentTarget.value);
  }

  return (
    <div className={`u-flex u-flex-column ${styles.container}`}>
      <Header title="Mes entrées" />
      <main className="homepage-content u-relative u-flex u-flex-column u-fill-space u-margin-t-4">
        <div className={` u-margin-b-2 ${styles.select}`}>
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
        <TimesheetFormEvent />
        <ToolNav />
      </main>
    </div>
  )
}

export default Home;