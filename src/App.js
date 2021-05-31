import React from 'react';
import './App.css';
import Home from './pages/Home.jsx';
import Beers from './pages/Beers.jsx';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/:id" component={OneBeer} />
      </Switch>

    </div>
  );
}

export default App;
