import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PopularMovies from './components/PopularMovies/PopularMovies';
import MoviePage from './components/MoviePage/MoviePage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact={true} path="/">
            <PopularMovies />
          </Route>
          <Route path="/movie/:id" component={MoviePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
