import React from 'react';
import PropTypes from 'prop-types';

import { yearHeader } from '../../utils/gregorian_utils';

const YearHeader = props => (
  <div className="year-header">
    <i
      onClick={props.onOneYearBackClick}
      className="fa fa-angle-left float-left year-btn"></i>
    <i
      onClick={props.onTenYearsBackClick}
      className="fa fa-angle-double-left float-left year-btn"></i>
    <i
      onClick={props.onOneYearAheadClick}
      className="fa fa-angle-right float-right year-btn"></i>
    <i
      onClick={props.onTenYearsAheadClick}
      className="fa fa-angle-double-right float-right year-btn"></i>
    <strong>{yearHeader(props.navigationDate)}</strong>
  </div>
);

YearHeader.propTypes = {
  navigationDate: PropTypes.object,
  onOneYearBackClick: PropTypes.func,
  onOneYearAheadClick: PropTypes.func,
  onTenYearsBackClick: PropTypes.func,
  onTenYearsAheadClick: PropTypes.func
};

export default YearHeader;
