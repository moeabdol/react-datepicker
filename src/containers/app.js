import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import './app.css';
import Datepicker from './datepicker/datepicker';

import * as gregorianUtils from '../utils/gregorian_utils';
import * as hijriUtils from '../utils/hijri_utils';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calendarType: 'Gregorian'
    };
  }

  onCalendarTypeChange = type => {
    this.setState({
      ...this.state,
      calendarType: type
    });
  };

  render() {
    return (
      <div className="App container mt-5">
        <div className="row">
          <div className="col">
            <Datepicker
              utils={this.state.calendarType === 'Gregorian' ?
                gregorianUtils : hijriUtils}
              calendarType={this.state.calendarType}
              onCalendarTypeChange={this.onCalendarTypeChange} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
