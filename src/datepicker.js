import React, { Component } from 'react';

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
        <input type="text" name="" readOnly onClick={this.onInputBoxClicked} />
      </div>
    );
  }
}

export default Datepicker;
