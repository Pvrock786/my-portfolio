import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home'
import { loadReCaptcha } from 'react-recaptcha-google'
import BackDrop from './components/Backdrop/BackDrop';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Contact from './components/contact/Contact';
import Gallary from './components/Gallary/Gallary';
import About from './components/About/About';
import Sponsors from './components/Sponsor/Sponsors';
import Footer from './components/Footer/Footer';
import CoreTeam from './components/CoreTeam/CoreTeam';
import DevelopmentTeam from './components/DevelopmentTeam/DevelopmentTeam';
import Faculty from './components/Faculty/Faculty';
import Error from './components/Error/Error';
import Login from './components/Login/Login';
import Eventcard from './components/Eventcard/Eventcard';


import ReactGA from 'react-ga';

class App extends Component {



  state = {
    sideDrawerOpen: false,
    loginOpen:false,
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen,  };
    });
  };

  loginToggleClickHandler = () => {
    this.setState((prevState) => {
      return { loginOpen: !prevState.loginOpen  };
    });
  };
  
  componentDidMount() {
    loadReCaptcha();
  }
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
    this.setState({ loginOpen: false });
  };
  render() {
    ReactGA.initialize('UA-154311784-1');
    ReactGA.pageview(window.location.pathname + window.location.search);


    let backdrop;
    let login;
    if (this.state.sideDrawerOpen)  {
      backdrop = <BackDrop click={this.backdropClickHandler} />
    }
    if (this.state.loginOpen){
      login = <Login lshow={this.state.loginOpen}/>
      backdrop = <BackDrop click={this.backdropClickHandler} />
    }
    return (
      <div className="App">
        <Router>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} loginClickHandler={this.loginToggleClickHandler} />
          <SideDrawer drawerClickHandler={this.drawerToggleClickHandler} show={this.state.sideDrawerOpen} />
          
          {backdrop}
          {login}
         
          <Switch>
            <Route exact path='/sponsors' component={Sponsors} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/gallary' component={Gallary} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact/faculty' component={Faculty} />
            <Route exact path='/contact/core-team' component={CoreTeam} />
            <Route exact path='/contact/development-team' component={DevelopmentTeam} />
            <Route exact path='/event' component={Eventcard} />
           
            <Route exact path='/' component={Home} />
            <Route exact path='' component={Error} />

          </Switch>
          <Footer />
        </Router>
      </div>

    );
  }
}
export default App;
