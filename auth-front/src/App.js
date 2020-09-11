import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import SignIn from './signin'
import SignUp from './signup'
import Dashboard from './dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
