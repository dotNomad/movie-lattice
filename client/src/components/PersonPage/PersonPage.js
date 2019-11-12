import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { movieDBImgSource } from '../../utils/Utils';

import './PersonPage.css';

class PersonPage extends Component {
    constructor(props) {
        super(props);
        this.state = { data: {}, images: [], movie_credits: [] }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`/person/${id}`)
            .then(response => response.json())
            .then(data => this.setState({ data: data }));
        fetch(`/person/${id}/images`)
            .then(response => response.json())
            .then(data => this.setState({ images: data.profiles }));
        fetch(`/person/${id}/movie_credits`)
            .then(response => response.json())
            .then(data => this.setState({ movie_credits: data.cast }));
    }

    render() {
        const { images, movie_credits } = this.state;
        const {
            name,
            biography,
        } = this.state.data;

        return (
            <div className="person-container">
                {images.length > 0 &&
                    <div className="headshot">
                        <img src={movieDBImgSource(images[0].file_path)} alt={name} />
                    </div>
                }
                <div className="details">
                    <h1>{name}</h1>
                    <p>{biography}</p>
                    <h3>Movies</h3>
                    <ul className="movies">
                        {movie_credits.map(movie => (
                            <li>
                                <Link to={location => `/movie/${movie.id}`}><b>{movie.original_title}</b></Link> {movie.character}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default PersonPage;
