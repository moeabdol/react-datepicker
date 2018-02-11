import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import './app.css';
import Datepicker from './datepicker/datepicker';

class App extends Component {
  render() {
    return (
      <div className="App container mt-5">
        <div className="row">
          <div className="col">
            <Datepicker />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
