import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import MoviePage from './components/MoviePage/MoviePage';
import PersonPage from './components/PersonPage/PersonPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Link to="/" title="Home"><h1>Movie Lattice</h1></Link>
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/movie/:id" component={MoviePage} />
          <Route path="/person/:id" component={PersonPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
