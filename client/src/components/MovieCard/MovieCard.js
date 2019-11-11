import React from 'react';

import './MovieCard.css';

function MovieCard(props) {
    const { posterPath, title } = props;

    return (
        <div className='card-container'>
            <img className='card' src={posterPath} alt={title}/>
        </div>
    )
}

export default MovieCard;
