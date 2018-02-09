import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './datepicker.css';
import onClickOutside from 'react-onclickoutside';

class Datepicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      year: 0,
      month: '',
    };
  }

  componentWillMount() {
    const year = moment().year();
    const month = moment().format('MMM');

    this.setState({
      ...this.state,
      year,
      month
    });
  }

  handleClickOutside = () => this.setState({ ...this.state, visible: false });

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
      .subtract(1, 'month').format('MMM');

    this.setState({
      ...this.state,
      month: oneMonthBack
    });
  };

  onOneMonthAheadClick = () => {
    const oneMonthAhead = moment().month(this.state.month)
      .add(1, 'month').format('MMM');

    this.setState({
      ...this.state,
      month: oneMonthAhead
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

        {this.state.visible ?
          <Calendar
            {...this.state}
            onOneMonthBackClick={this.onOneMonthBackClick}
            onOneMonthAheadClick={this.onOneMonthAheadClick}
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
      className="fa fa-angle-left float-left year-btn"></i>
    <i
      onClick={props.onOneMonthAheadClick}
      className="fa fa-angle-right float-right year-btn"></i>
    <strong>{props.month}</strong>
  </div>
);

Calendar.propTypes = {
  onOneMonthBackClick: PropTypes.func,
  onOneMonthAheadClick: PropTypes.func,
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

MonthHeader.propTypes = {
  month: PropTypes.string,
  onOneMonthBackClick: PropTypes.func,
  onOneMonthAheadClick: PropTypes.func
};

export default onClickOutside(Datepicker);
