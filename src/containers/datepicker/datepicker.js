import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './datepicker.css';
import onClickOutside from 'react-onclickoutside';

import Calendar from '../../components/calendar/calendar';

class Datepicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      navigationDate: this.props.utils.initialMoment(),
      selectedDate: this.props.utils.initialMoment()
    };
  }

  handleClickOutside = () => {
    this.setState({
      ...this.state,
      visible: false,
      navigationDate: this.state.selectedDate
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
      navigationDate: this.props.utils.oneYearBack(this.state.navigationDate)
    });
  };

  onOneYearAheadClick = () => {
    this.setState({
      ...this.state,
      navigationDate: this.props.utils.oneYearAhead(this.state.navigationDate)
    });
  };

  onTenYearsBackClick = () => {
    this.setState({
      ...this.state,
      navigationDate: this.props.utils.tenYearsBack(this.state.navigationDate)
    });
  };

  onTenYearsAheadClick = () => {
    this.setState({
      ...this.state,
      navigationDate: this.props.utils.tenYearsAhead(this.state.navigationDate)
    });
  };

  onOneMonthBackClick = () => {
    this.setState({
      ...this.state,
      navigationDate: this.props.utils.oneMonthBack(this.state.navigationDate)
    });
  };

  onOneMonthAheadClick = () => {
    this.setState({
      ...this.state,
      navigationDate: this.props.utils.oneMonthAhead(this.state.navigationDate)
    });
  };

  onDateSelected = date => {
    if (date) {
      this.setState({
        ...this.state,
        selectedDate: this.props.utils.dateSelected(this.state.navigationDate, date)
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
            value={this.props.utils.inputDate(this.state.selectedDate)}
            readOnly
            onClick={this.onInputBoxClicked} />

          <div className="input-group-append">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">{this.props.calendarType}</button>
            <div className="dropdown-menu dropdown-menu-right">
              <a
                onClick={() => this.props.onCalendarTypeChange('Gregorian')}
                className="dropdown-item" href="#">Gregorian</a>
              <a
                onClick={() => this.props.onCalendarTypeChange('Hijri')}
                className="dropdown-item" href="#">Hijri</a>
            </div>
          </div>
        </div>

        {this.state.visible ?
          <Calendar
            {...this.state}
            utils={this.props.utils}
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

Datepicker.propTypes = {
  utils: PropTypes.object,
  onCalendarTypeChange: PropTypes.func,
  calendarType: PropTypes.string
};

export default onClickOutside(Datepicker);
