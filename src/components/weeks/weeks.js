import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';

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

Weeks.propTypes = {
  year: PropTypes.number,
  month: PropTypes.number,
  onDateSelected: PropTypes.func,
  selectedDate: PropTypes.object
};

export default Weeks;
