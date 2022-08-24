import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import { IconAdd } from '../utils/Icons';
import styles from './ToolNav.module.scss';
import  { useNavigate } from 'react-router-dom'

function ToolNav({
  toggleCard, // Reducer props
  currentType, // Reducer props
  types, // Reducer props
  setType, // Reducer props
  currentTemplate, // Reducer props
  templates, // Reducer props
  setTemplate, // Reducer props
  cardOpened, // Reducer props
}) {
  const navigate = useNavigate();
  const classes = {
    buttonsCentered: currentType === types.card ? styles.centerIcons : '',
    button: currentType === types.card ? styles.icon_remove : '',
    icon: {
      bg:  currentType === types.card ? styles.icon_bgColor_remove : '',
      color: currentType === types.card ? styles.icon_color_remove : styles.icon_color,
    },
    template: currentTemplate === templates.form ? styles.toolnav_form : '',
    slideIcons: currentTemplate === templates.form ? styles.toolnav_form_buttons : '',
    slideInfos: currentTemplate === templates.form ? styles.toolnav_form_infos : '',
  }
  const handleClick = (evt) => {
    toggleCard({id: evt.currentTarget.dataset.cardId});

    switch (currentType) {
      case types.simple:
        setType({type: types.card});
        break;

      case types.card:
        setType({type: types.simple});
        break;
    
      default:
        setType({type: types.simple});
        break;
    }
  }

  const handleOpenForm = (evt) => {
    if (currentType === types.card) {
      toggleCard({id: evt.currentTarget.dataset.cardId});
      setType({type: types.simple});
    } else {
      setType({type: types.form});
      setTemplate({template: templates.form});
      setTimeout(() => {
        navigate("/add");
      }, 1600);
    }
  }

  return (
    <aside className={`tool-nav ${styles.toolnav}`}>
      <div className="u-relative">
        <div className={`tool-nav-buttons ${styles.toolnav_buttons} ${classes.slideIcons}`}>
          <div className={`u-relative ${styles.toolnav_buttons_container} ${classes.buttonsCentered}`}>
            <button type='button' className="button func-button" data-card-id={'formEvent'} onClick={handleClick}><img src="./images/event.svg" alt="Voir les évènments" /></button>
            <button type='button' className={`button func-button u-padding-r-0 ${styles.icon} ${classes.button}`} data-card-id={cardOpened} onClick={handleOpenForm}>
              <IconAdd bgColor={`${styles.icon_bgColor} ${classes.icon.bg}`} color={classes.icon.color} />
            </button>
          </div>
        </div>
        <div className={`tool-nav-infos jauge ${classes.template} ${styles.toolnav_infos}`}>
          <p className="tool-nav-infos__text jauge__text">Temps timesheeté <span className="t-weight-600">%CURRENT_TOTAL_TIME%</span></p>
          <ProgressBar />
        </div>
      </div>
    </aside>
  )
}

export default ToolNav;