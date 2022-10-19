import React from 'react';
import { Header } from '../../components';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Select from '../../containers/Select';
import ToolNav from '../../containers/ToolNav';
import styles from './AddTimesheet.module.scss';

function AddTimesheet({
  types,
  setType,
  templates,
  setTemplate,
}) {  
  const projectOptions = [
    {value: 'week', label: 'Sélectionner un projet'},
    {value: 'today', label: 'Projet 2'},
  ]

  setType({type: types.form});
  setTemplate({template: templates.form});

  const handleProject = (e) => {
    console.log(e.currentTarget);
  }

  return (
    <main className={`addpage ${styles.container}`}>
      <Header title={'Nouvelle Entrée'} theme={'dark'} />

      <section className={`jauge ${styles.progressbar}`}>
        <p className="c-gray-30 u-margin-b-1">Temps timesheeté <span className="t-weight-600">3h00</span></p>
        <ProgressBar />
      </section>

      <section className={`bg-white ${styles.form}`}>
        <div className={styles.form_section}>
          <label htmlFor="date">Je timesheet pour aujourd'hui</label>
          <div>

          </div>
        </div>

        <div className={styles.form_section}>
          <div className={`u-margin-b-1 u-flex u-align-items-center ${styles.form_slider_container}`}>
            <label htmlFor="project">Projets</label>
            <div className={`${styles.form_slider}`}>
              <button type='button' className='button t-base-xsmall t-weight-500 bg-layette u-margin-r-1'>Projet 1</button>
              <button type='button' className='button t-base-xsmall t-weight-500 bg-layette u-margin-r-1'>Projet 2</button>
              <button type='button' className='button t-base-xsmall t-weight-500 bg-layette u-margin-r-1'>Projet 3</button>
              <button type='button' className='button t-base-xsmall t-weight-500 bg-layette u-margin-r-1'>Projet 4</button>
              <button type='button' className='button t-base-xsmall t-weight-500 bg-layette u-margin-r-3'>Projet 5</button>
            </div>
          </div>

          <div>
          <Select id={'project'} name={'project'} options={projectOptions} optionDefault={'week'} size={'large'} handleChange={handleProject} />
          </div>
        </div>

        <div className={styles.form_section}>
          <div className={`u-margin-b-1 u-flex u-align-items-center ${styles.form_slider_container}`}>
            <label htmlFor="time">Temps passé</label>
            <div className={`${styles.form_slider}`}>
              <button type='button' className='button t-base-xsmall t-weight-500 bg-layette u-margin-r-1'>Temps restant</button>
              <button type='button' className='button t-base-xsmall t-weight-500 bg-layette u-margin-r-3'>Convertir mon temps</button>
            </div>
          </div>

          <div>
          <Select id={'time'} name={'time'} options={projectOptions} optionDefault={'week'} size={'large'} handleChange={handleProject} />
          </div>
        </div>
        
      </section>
      <ToolNav />
    </main>
  )
}

export default AddTimesheet;