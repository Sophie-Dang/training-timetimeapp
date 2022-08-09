import React from "react";
import TimesheetRateBlock from "./components/TimesheetRateBlock";

function TimesheetRate() {
  return (
    <section className="stats u-flex u-justify-content-space-between u-margin-b-4">
      <TimesheetRateBlock description={'Taux'} rate={'100%'} background={'pale-green'} />
      <TimesheetRateBlock description={'Fréquence'} rate={'0.5'} background={'layette'} />
      <TimesheetRateBlock description={'Jours travaillés'} rate={'5'} background={'gray-20'} />
    </section>
  )
}

export default TimesheetRate;