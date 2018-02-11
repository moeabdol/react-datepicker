import React from 'react';
import PropTypes from 'prop-types';

import { monthHeader } from '../../utils/gregorian_utils';

const MonthHeader = props => (
  <div className="month-header">
    <i
      onClick={props.onOneMonthBackClick}
      className="fa fa-angle-left float-left month-btn"></i>
    <i
      onClick={props.onOneMonthAheadClick}
      className="fa fa-angle-right float-right month-btn"></i>
    <strong>{monthHeader(props.navigationDate)}</strong>
  </div>
);

MonthHeader.propTypes = {
  navigationDate: PropTypes.object,
  onOneMonthBackClick: PropTypes.func,
  onOneMonthAheadClick: PropTypes.func
};

export default MonthHeader;
