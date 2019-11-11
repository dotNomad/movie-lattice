import React, { Component } from 'react';
import MovieGrid from '../MovieGrid/MovieGrid';

class PopularMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {movies: []};
    }

    componentDidMount() {
        fetch('/movie/popular')
            .then(response => response.json())
            .then(data => this.setState({ movies: data.results }))
    }

    render() {
        return (
            <MovieGrid movies={this.state.movies}/>
        );
    }
}

export default PopularMovies;
