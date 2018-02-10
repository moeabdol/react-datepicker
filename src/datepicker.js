import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './datepicker.css';
import onClickOutside from 'react-onclickoutside';
import _ from 'lodash';

class Datepicker extends Component {
  constructor(props) {
    super(props);

    const initialMoment = moment();

    this.state = {
      visible: false,
      year: initialMoment.year(),
      month: initialMoment.month(),
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
    const oneYearAgo = this.state.year - 1;

    this.setState({
      ...this.state,
      year: oneYearAgo
    });
  };

  onOneYearAheadClick = () => {
    const oneYearAhead = this.state.year + 1;

    this.setState({
      ...this.state,
      year: oneYearAhead
    });
  };

  onTenYearsBackClick = () => {
    const tenYearsAgo = this.state.year - 10;

    this.setState({
      ...this.state,
      year: tenYearsAgo
    });
  };

  onTenYearsAheadClick = () => {
    const tenYearsAhead = this.state.year + 10;

    this.setState({
      ...this.state,
      year: tenYearsAhead
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

      const selectedDate = moment().date(day).month(month).year(year);

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
    <strong>{props.year}</strong>
  </div>
);

const MonthHeader = props => (
  <div className="month-header">
    <i
      onClick={props.onOneMonthBackClick}
      className="fa fa-angle-left float-left month-btn"></i>
    <i
      onClick={props.onOneMonthAheadClick}
      className="fa fa-angle-right float-right month-btn"></i>
    <strong>{moment().month(props.month).format('MMM')}</strong>
  </div>
);

class Weeks extends Component {
  render() {
    const startDate = moment([this.props.year, this.props.month]);
    const endDate = moment(startDate).endOf('month');
    const diff = endDate.diff(startDate, 'days') + 1;

    const days = [];
    _.range(startDate.day()).map(() => {
      days.push(false);
    });

    _.range(diff).map(i => {
      days.push(('0' + (i + 1)).slice(-2));
    });

    _.range((5 * 7) - days.length).map(() => {
      days.push(false);
    });

    const weeks = [];
    while(days.length) weeks.push(days.splice(0, 7));

    return (
      <div className="weeks">
        <table>
          <thead>
            <tr>
              <td>SUN</td>
              <td>MON</td>
              <td>TUE</td>
              <td>WED</td>
              <td>THU</td>
              <td>FRI</td>
              <td>SAT</td>
            </tr>
          </thead>
          <tbody>
            {_.range(5).map(i => {
              return <tr key={i}>
                {_.range(7).map(j => {
                  let selectedClass = '';
                  let day = weeks[i][j][0] === '0' ?
                    parseInt(weeks[i][j][1]) : parseInt(weeks[i][j]);

                  if (this.props.year === this.props.selectedDate.year() &&
                    this.props.month === this.props.selectedDate.month() &&
                    day === this.props.selectedDate.date()) {
                    selectedClass = 'selected text-white bg-primary';
                  }

                  return (
                    <td
                      onClick={() => this.props.onDateSelected(weeks[i][j])}
                      className={`${selectedClass} ${weeks[i][j] ? '' : 'non-month-day'}`}
                      key={Math.random(i * j)}>{weeks[i][j]}</td>
                  );
                })}
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

Calendar.propTypes = {
  onOneMonthBackClick: PropTypes.func,
  onOneMonthAheadClick: PropTypes.func,
  onOneYearBackClick: PropTypes.func,
  onOneYearAheadClick: PropTypes.func,
  onTenYearsBackClick: PropTypes.func,
  onTenYearsAheadClick: PropTypes.func,
  onDateSelected: PropTypes.func
};

YearHeader.propTypes = {
  year: PropTypes.number,
  onOneYearBackClick: PropTypes.func,
  onOneYearAheadClick: PropTypes.func,
  onTenYearsBackClick: PropTypes.func,
  onTenYearsAheadClick: PropTypes.func
};

MonthHeader.propTypes = {
  month: PropTypes.number,
  onOneMonthBackClick: PropTypes.func,
  onOneMonthAheadClick: PropTypes.func
};

Weeks.propTypes = {
  year: PropTypes.number,
  month: PropTypes.number,
  onDateSelected: PropTypes.func,
  selectedDate: PropTypes.object
};

export default onClickOutside(Datepicker);
