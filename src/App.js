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
    <Route path="/urlink-components" component={Home}/>
    <Route path="/Signup" component={Signup} />
    <Route path="/Login" component={Login} />
    </>
  );
}
export default App;

