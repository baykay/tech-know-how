import React from 'react';
import LoginView from './components/login';
import RegisterView from "./components/register"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LoginView}/>
        <Route path='/register' component={RegisterView}/>
      </Switch>
    </Router>
  )
}

export default App;
