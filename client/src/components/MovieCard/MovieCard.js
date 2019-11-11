import React from 'react';

import './MovieCard.css';

function MovieCard(props) {
    const { posterPath } = props;

    return (
        <div className='card-container'>
            <img className='card' src={posterPath} />
        </div>
    )
}

export default MovieCard;
