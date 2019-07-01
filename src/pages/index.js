import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../scss/index.scss';
import Welcome from './welcome';
import Packages from './packages';
import Address from './address';
import Contact from './contact';
import Orders from './orders';
import Confirm from './confirm';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <div className="App">
          <Route exact path="/" component={Packages} />
          <Route exact path="/packages"/>
          <Route exact path="/address" component={Address} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/confirm" component={Confirm} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
