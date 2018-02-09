import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import './app.css';
import Datepicker from './datepicker';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Datepicker />
      </div>
    );
  }
}

export default App;
