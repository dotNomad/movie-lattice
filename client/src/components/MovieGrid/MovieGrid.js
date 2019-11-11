import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

import './MovieGrid.css';

function MovieGrid(props) {
    const posterPath = 'http://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg';

    return (
        <div className='movie-grid'>
            <MovieCard posterPath={posterPath} />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
    );
}

export default MovieGrid;
