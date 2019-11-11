import React from 'react';
import { useParams } from 'react-router-dom';

function MoviePage(props) {
    let { id } = useParams();

    return (
        <h1>Movie: {id}</h1>
    );
}

export default MoviePage;
