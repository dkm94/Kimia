import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Accueil from './components/accueil';
import Navbar  from './components/navbar'


class App extends React.Component {
  render() {
      return (
          <Router>
              <Switch>
              <Navbar className="navbar"/>
                  <Route exact path="/" component={Accueil} />
              </Switch>
          </Router>
      );
  }
}

export default App;
