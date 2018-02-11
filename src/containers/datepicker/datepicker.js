import React, { Component } from 'react';
import moment from 'moment';
import './datepicker.css';
import onClickOutside from 'react-onclickoutside';
import {
  oneYearAhead,
  oneYearBack,
  tenYearsAhead,
  tenYearsBack,
} from '../../utils/gregorian_utils';

import Calendar from '../../components/calendar/calendar';

class Datepicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      navigationDate: moment(),
      selectedDate: moment()
    };
  }

  handleClickOutside = () => {
    const year = this.state.selectedDate.year();
    const month = this.state.selectedDate.month();

    this.setState({
      ...this.state,
      visible: false,
      year,
      month
    });
  };

  onInputBoxClicked = () => {
    this.setState({
      ...this.state,
      visible: !this.state.visible
    });
  };

  onOneYearBackClick = () => {
    this.setState({
      ...this.state,
      navigationDate: oneYearBack(this.state.navigationDate)
    });
  };

  onOneYearAheadClick = () => {
    this.setState({
      ...this.state,
      navigationDate: oneYearAhead(this.state.navigationDate)
    });
  };

  onTenYearsBackClick = () => {
    this.setState({
      ...this.state,
      navigationDate: tenYearsBack(this.state.navigationDate)
    });
  };

  onTenYearsAheadClick = () => {
    this.setState({
      ...this.state,
      navigationDate: tenYearsAhead(this.state.navigationDate)
    });
  };

  onOneMonthBackClick = () => {
    const oneMonthBack = moment().month(this.state.month)
      .subtract(1, 'month').month();

    this.setState({
      ...this.state,
      month: oneMonthBack
    });
  };

  onOneMonthAheadClick = () => {
    const oneMonthAhead = moment().month(this.state.month)
      .add(1, 'month').month();

    this.setState({
      ...this.state,
      month: oneMonthAhead
    });
  };

  onDateSelected = day => {
    if (day) {
      const year = this.state.year;
      const month = this.state.month;

      if (day[0] === '0') day = parseInt(day[1]);
      else day = parseInt(day);

      const selectedDate = moment().month(month).year(year).date(day);

      this.setState({
        ...this.state,
        selectedDate
      });
    }
  };

  render() {
    return (
      <div className="datepicker">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={this.state.selectedDate.format('YYYY-MM-DD')}
            readOnly
            onClick={this.onInputBoxClicked} />

          <div className="input-group-append">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">Hijri</button>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#">Hijri</a>
              <a className="dropdown-item" href="#">Gregorian</a>
            </div>
          </div>
        </div>

        {this.state.visible ?
          <Calendar
            {...this.state}
            onOneMonthBackClick={this.onOneMonthBackClick}
            onOneMonthAheadClick={this.onOneMonthAheadClick}
            onOneYearBackClick={this.onOneYearBackClick}
            onOneYearAheadClick={this.onOneYearAheadClick}
            onTenYearsBackClick={this.onTenYearsBackClick}
            onTenYearsAheadClick={this.onTenYearsAheadClick}
            onDateSelected={this.onDateSelected} /> : null
        }
      </div>
    );
  }
}

export default onClickOutside(Datepicker);
