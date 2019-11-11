import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

import './MovieGrid.css';

function MovieGrid(props) {
    return (
        <div className='movie-grid'>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
    );
}

export default MovieGrid;
