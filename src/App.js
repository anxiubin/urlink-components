import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Signup from './Template/Signup';
import Login from './Template/Login';
import Home from './Home';

function App() {
  return (
    <>
    <Route exact path="/" component={Home}/>
    <Route exact path="/urlink-components" component={Home}/>
    <Route exact path="/urlink-components/Signup" component={Signup} />
    <Route exact path="/urlink-components/Login" component={Login} />
    </>
  );
}
export default App;

