import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { movieDBImgSource } from '../../utils/Utils';

import './MovieGrid.css';

function MovieGrid(props) {
    return (
        <div className='movie-grid'>
            {props.movies.map(movie => {
                const posterPath = movieDBImgSource(movie['poster_path']);
                return (
                    <MovieCard 
                        key={movie['original_title']}
                        posterPath={posterPath}
                    />
                );
            })}
        </div>
    );
}

export default MovieGrid;
