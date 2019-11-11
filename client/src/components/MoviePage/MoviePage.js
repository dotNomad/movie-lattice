import React, { Component } from 'react';
import { movieDBImgSource } from '../../utils/Utils';

import './MoviePage.css';

class MoviePage extends Component {
    constructor(props) {
        super(props);
        this.state = { cast: [], crew: [], data: {} };
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`/movie/${id}`)
            .then(response => response.json())
            .then(data => this.setState({ data: data }));
        fetch(`/movie/${id}/credits`)
            .then(response => response.json())
            .then(data => this.setState({ cast: data.cast, crew: data.crew }));
    }

    render() {
        const { cast } = this.state;
        const {
            original_title,
            overview,
            poster_path,
            release_date
        } = this.state.data;

        return (
            <div className="movie-container">
                <div className="poster">
                    <img src={movieDBImgSource(poster_path)} alt={original_title} />
                </div>
                <div className="details">
                    <h1>Movie: {original_title}</h1>
                    <p>{overview}</p>
                    <h3>Cast</h3>
                    <ul className="cast">
                        {cast.map(member => (
                            <li><b>{member.name}</b> {member.character}</li>
                        ))}
                    </ul>
                    <p><i>Release Date: {release_date}</i></p>
                </div>
            </div>
        );
    }
}

export default MoviePage;
