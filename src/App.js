import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/home';
//import AdvancedCalculator from './pages/Calculator/calculator';
import Contact from './pages/Contact/contact';
import {
  CONTACT,
  HOME,
  NET_CALC,
  ONLINE_TOOLS_REACT,
  PASSWORD_GENERATOR
} from './constants/GeneralConstants';
import asPath from './utils';
import PasswordGenerator from './pages/PasswordGenerator/passwordGenerator';
import Sidebar from './components/Sidebar';
import NetworkCalculator from './pages/NetworkCalculator/networkCalculator';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isSidebar: false,
    }
  }

  toggle = () => {
    this.state.isSidebar ?
      this.setState({ isSidebar: false }) :
      this.setState({ isSidebar: true });
  }

  render() {

    var { isSidebar } = this.state;

    return (
      <Router>
        <Navbar isSidebar={isSidebar} toggle={this.toggle} />
        <Sidebar isSidebar={isSidebar} toggle={this.toggle} />
        <Switch>
          <Route path={asPath(ONLINE_TOOLS_REACT) + asPath(HOME)} exact component={Home} />
          <Route path={asPath(ONLINE_TOOLS_REACT) + asPath(NET_CALC)} component={NetworkCalculator} />
          <Route path={asPath(ONLINE_TOOLS_REACT) + asPath(PASSWORD_GENERATOR)} component={PasswordGenerator} />
          <Route path={asPath(ONLINE_TOOLS_REACT) + asPath(CONTACT)} component={Contact} />
          {/* <Route path={asPath(SIGN_UP)} component={SignUp} /> */}
          <Route path="*" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
