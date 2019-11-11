import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PopularMovies from './components/PopularMovies/PopularMovies';
import MoviePage from './components/MoviePage/MoviePage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact={true} path="/">
            <PopularMovies />
          </Route>
          <Route path="/movie/:id">
            <MoviePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
