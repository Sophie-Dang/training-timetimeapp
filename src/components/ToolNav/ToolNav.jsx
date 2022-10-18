import './toolNav.scss';
import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import { IconAdd, IconTrash, IconValidate } from '../utils/Icons';
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
  isAnimated, // Reducer props
}) {
  const navigate = useNavigate();
  const classes = {
    buttonsCentered: currentType === types.card ? 'center-icons' : '',
    button: currentType === types.card ? 'toolnav__icon--remove' : '',
    templateAnimated: isAnimated === true ? 'toolnav--animate' : '',
    template: currentTemplate === templates.form && !isAnimated ? 'toolnav--form' : 'toolnav--simple',
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
      setType({type: types.animate});
      setTimeout(() => {
        navigate("/add");
        setType({type: types.form});
        setTemplate({template: templates.form});
      }, 1600);
    }
  }

  const handleCloseForm = () => {
    setType({type: types.animate});
    setTimeout(() => {
      navigate("/");
      setType({type: types.simple});
      setTemplate({template: templates.default});
    }, 1600);
  }

  return (
    <aside className="toolnav">
      <div className={`u-relative ${classes.template} ${classes.templateAnimated}`}>
        <div className="toolnav-content">

            { currentTemplate === 'form' ?
              <div className={`toolnav-buttons u-relative ${classes.buttonsCentered}`}>
                <button className="button icon-button--rounded c-pale-red">
                  <IconTrash />
                </button>
                <button type='button' className="button icon-button--rounded" data-card-id={'formEvent'} onClick={handleClick}><img src="./images/event.svg" alt="Voir les évènments" /></button>
                <button type='button' className={`button icon-button--lg-rounded u-margin-r-0 ${classes.button}`} data-card-id={cardOpened} onClick={handleCloseForm}>
                  <IconValidate />
                </button>
                <button type='button' className={`button icon-button--rounded u-margin-r-0 c-gray-20`} data-card-id={cardOpened} onClick={handleOpenForm}>
                  <IconAdd />
                </button>
              </div>
            :
              <>
              <div className={`toolnav-buttons ${classes.buttonsCentered}`}>
                <button type='button' className="button func-button" data-card-id={'formEvent'} onClick={handleClick}><img src="./images/event.svg" alt="Voir les évènments" /></button>
                <button type='button' className={`button func-button u-margin-r-0 icon-button--lg-rounded ${classes.button}`} data-card-id={cardOpened} onClick={handleOpenForm}>
                  <IconAdd />
                </button>
              </div>

              <div className="toolnav-infos jauge">
                <p className="jauge__text">Temps timesheeté <span className="t-weight-600">%CURRENT_TOTAL_TIME%</span></p>
                <ProgressBar />
              </div>
              </>
            }

        </div>
      </div>
    </aside>
  )
}

export default ToolNav;