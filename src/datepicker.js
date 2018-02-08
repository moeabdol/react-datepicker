import React, { Component } from 'react';
import './datepicker.css';

class Datepicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  onInputBoxClicked = () => {
    this.setState({ ...this.state, visible: !this.state.visible });
  };

  render() {
    return (
      <div className="datepicker">
        <input type="text" readOnly onClick={this.onInputBoxClicked} />
        {this.state.visible ? <Calendar /> : null}
      </div>
    );
  }
}

const Calendar = () => (
  <div className="calendar">
  </div>
);

export default Datepicker;
