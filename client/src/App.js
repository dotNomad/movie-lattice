import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import MoviePage from './components/MoviePage/MoviePage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/movie/:id" component={MoviePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
