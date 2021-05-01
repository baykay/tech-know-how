import React from 'react';
import LoginView from './components/login';
import RegisterView from "./components/register"
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"
import Dashboard from './components/dashboard/Dashboard';
import isAunthenticated from './components/isAunthenticated';

const ProtectedRoute = ({component: Component}) => {
  

  if (isAunthenticated()){
    return <Component/>
  }
  else{
    return <Redirect to="/"/>
  }
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LoginView}/>
        <ProtectedRoute path='/dashboard' component={Dashboard}/>
        <Route path='/register' component={RegisterView}/>
      </Switch>
    </Router>
  )
}

export default App;
