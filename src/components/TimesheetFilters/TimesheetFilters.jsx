import React from "react";
import InputBoolean from "../../containers/InputBoolean";
import ChildElement from "../utils/ChildElement";

function TimesheetFilters({children}) {
  return (
    <>
    <ChildElement childrenProp={children} stateObj={{}} />
    <div className="timesheets-filters u-flex">
      <InputBoolean values={{left: 'remplis', right: 'restants'}} labels={{left: 'Remplis', right: 'Restants'}} />
      <button className="button func-button text-icon-button u-padding-0 u-margin-l-1 t-weight-600 t-base-xsmall js-open-filters">
        <img className="u-padding-r-1" src="/images/filter.svg" alt="Icône filtrer" />
        Filtrer
      </button>
    </div>
    </>
  )
}

export default TimesheetFilters;