import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from './Components/WelcomePage'
import EasyMode from './Components/EasyMode'
import HardMode from './Components/HardMode'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/easyMode" component={EasyMode} />
        <Route path="/hardMode" component={HardMode} />
      </Switch>
    </Router>
  );
}

export default App;
