import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import MainPage from './components/MainPage/'
import ArtistPage from './components/ArtistPage/'
import FanPage from './components/FanPage/'
import RegisterPage from './components/RegisterPage/'
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ MainPage } />
        <Route exact path="/artist" component={ ArtistPage } />
        <Route exact path="/fan" component={ FanPage } />
        <Route exact path="/register" component={ RegisterPage } />
        <Route exact path="/login" component={ LoginPage } />
      </Switch>
    </div>
  );
}

export default App;
