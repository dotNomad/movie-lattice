import React, { Component } from 'react';
import MovieGrid from '../MovieGrid/MovieGrid';

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
                <h1>Movie Lattice</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Search:
                        <input type="text" value={this.state.searchValue} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <MovieGrid movies={this.state.movies}/>
            </div>
        );
    }
}

export default HomePage;
