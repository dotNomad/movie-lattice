import React, { Component } from 'react';
import { movieDBImgSource } from '../../utils/Utils';

import './PersonPage.css';

class PersonPage extends Component {
    constructor(props) {
        super(props);
        this.state = { data: {} }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        fetch(`/person/${id}`)
            .then(response => response.json())
            .then(data => this.setState({ data: data }));
    }

    render() {
        const {
            name
        } = this.state.data;

        return (
            <h1>Name: {name}</h1>
        )
    }
}

export default PersonPage;
