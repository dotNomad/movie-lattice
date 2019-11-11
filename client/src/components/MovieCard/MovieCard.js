import React from 'react';

import './MovieCard.css';

function MovieCard(props) {
    const srcUri = 'http://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg';

    return (
        <div className='card-container'>
            <img className='card' src={srcUri} />
        </div>
    )
}

export default MovieCard;
