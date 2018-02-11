import React from 'react';
import PropTypes from 'prop-types';

import MonthHeader from '../month_header/month_header';
import YearHeader from '../year_header/year_header';
import Weeks from '../weeks/weeks';

const Calendar = props => (
  <div className="calendar">
    <MonthHeader
      {...props}
      onOneMonthBackClick={props.onOneMonthBackClick}
      onOneMonthAheadClick={props.onOneMonthAheadClick} />
    <YearHeader
      {...props}
      onOneYearBackClick={props.onOneYearBackClick}
      onOneYearAheadClick={props.onOneYearAheadClick}
      onTenYearsBackClick={props.onTenYearsBackClick}
      onTenYearsAheadClick={props.onTenYearsAheadClick} />
    <Weeks
      {...props}
      onDateSelected={props.onDateSelected} />
  </div>
);

Calendar.propTypes = {
  onOneMonthBackClick: PropTypes.func,
  onOneMonthAheadClick: PropTypes.func,
  onOneYearBackClick: PropTypes.func,
  onOneYearAheadClick: PropTypes.func,
  onTenYearsBackClick: PropTypes.func,
  onTenYearsAheadClick: PropTypes.func,
  onDateSelected: PropTypes.func
};

export default Calendar;
