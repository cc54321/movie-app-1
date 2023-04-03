import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            searchType: ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        this.props.searchMovie(this.state.searchTerm, this.state.searchType);

        this.setState({
            searchTerm: '',
            searchType: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Search Movies</h2>
                <label>
                    Search by:
                    <select name="searchType" value={this.state.searchType} onChange={this.handleChange}>
                        <option value="title">Title</option>
                        <option value="director">Director</option>
                        <option value="year">Year</option>
                    </select>
                </label>
                <label>
                    Search Term:
                    <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Search" />
            </form>
        )
    }
}

export default Search;