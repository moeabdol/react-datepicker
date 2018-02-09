import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './datepicker.css';

class Datepicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calendarVisible: false,
      year: 0
    };
  }

  componentWillMount() {
    const year = moment().year();

    this.setState({
      ...this.state,
      year
    });
  }

  onInputBoxClicked = () => {
    this.setState({
      ...this.state,
      calendarVisible: !this.state.calendarVisible
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

  render() {
    return (
      <div className="datepicker">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={moment().format('YYYY-MM-DD')}
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

        {this.state.calendarVisible ?
          <Calendar
            {...this.state}
            onOneYearBackClick={this.onOneYearBackClick}
            onOneYearAheadClick={this.onOneYearAheadClick}
            onTenYearsBackClick={this.onTenYearsBackClick}
            onTenYearsAheadClick={this.onTenYearsAheadClick} /> : null
        }
      </div>
    );
  }
}

const Calendar = props => (
  <div className="calendar">
    <YearHeader
      {...props}
      onOneYearBackClick={props.onOneYearBackClick}
      onOneYearAheadClick={props.onOneYearAheadClick}
      onTenYearsBackClick={props.onTenYearsBackClick}
      onTenYearsAheadClick={props.onTenYearsAheadClick} />
  </div>
);

const YearHeader = props => (
  <div className="year-header">
    <i
      onClick={props.onTenYearsBackClick}
      className="fa fa-angle-double-left float-left year-btn"></i>
    <i
      onClick={props.onOneYearBackClick}
      className="fa fa-angle-left float-left year-btn"></i>
    <i
      onClick={props.onTenYearsAheadClick}
      className="fa fa-angle-double-right float-right year-btn"></i>
    <i
      onClick={props.onOneYearAheadClick}
      className="fa fa-angle-right float-right year-btn"></i>
    <h6>
      <strong>
        {props.year}
      </strong>
    </h6>
  </div>
);

Calendar.propTypes = {
  onOneYearBackClick: PropTypes.func,
  onOneYearAheadClick: PropTypes.func,
  onTenYearsBackClick: PropTypes.func,
  onTenYearsAheadClick: PropTypes.func
};

YearHeader.propTypes = {
  year: PropTypes.number,
  onOneYearBackClick: PropTypes.func,
  onOneYearAheadClick: PropTypes.func,
  onTenYearsBackClick: PropTypes.func,
  onTenYearsAheadClick: PropTypes.func
};

export default Datepicker;
