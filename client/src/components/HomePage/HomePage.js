import React, { Component } from 'react';
import MovieGrid from '../MovieGrid/MovieGrid';

import './HomePage.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {movies: [], searchValue: ''};
    }

    handleChange = (event) => {
        this.setState({searchValue: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const query = encodeURI(this.state.searchValue);
        if (query) {
            fetch(`/search/movie?query=${query}`)
                .then(response => response.json())
                .then(data => this.setState({ movies: data.results }));
        } else {
            this.showPopularMovies();
        }
    }

    componentDidMount() {
        this.showPopularMovies();
    }

    showPopularMovies = () => {
        fetch('/movie/popular')
            .then(response => response.json())
            .then(data => this.setState({ movies: data.results }));
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit} className="search-bar">
                    <input
                        aria-label="Movie Title"
                        placeholder="Movie Title"
                        type="text"
                        value={this.state.searchValue}
                        onChange={this.handleChange}
                    />
                    <input aria-label="Search" type="submit" value="Search" />
                </form>
                <MovieGrid movies={this.state.movies}/>
            </div>
        );
    }
}

export default HomePage;
