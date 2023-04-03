import React, { Component } from 'react';


class MovieForm extends Component {
    constructor (props) {
        super(props);
        this.initialState = {
            title: '',
            director: '',
            plot: '',
            actors: '',
            imdbRating: '',
            year: '',
            dateAdded: new Date().toString()
        }
        this.state = this.initialState;

    }

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const newDate = new Date().toString();

        this.setState({dateAdded:newDate});

        
        this.props.addMovie(this.state);

        this.initialState.dateAdded = newDate;

        this.setState(this.initialState);
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Submit Movie</h2>
                <label>
                    Title:
                    <input type="text" name="title" className="titleInput" value={this.state.title} onChange={this.handleChange} />
                </label>
                <label>
                    Director:
                    <input type="text" name="director" className="directorInput" value={this.state.director} onChange={this.handleChange} />
                    
                </label>
                <label>
                    Year:
                    <input type="text" name="year" className="yearInput" value={this.state.year} onChange={this.handleChange} />
                </label>
                <label>
                    Plot:
                    <input type="text" name="plot" className="plotInput" value={this.state.plot} onChange={this.handleChange} />
                    
                </label>
                <label>
                    Actors:
                    <input type="text" name="actors" className="actorsInput" value={this.state.actors} onChange={this.handleChange} />
                </label>
                <label>
                    IMDB Rating:
                    <input type="text" name="imdbRating" className="imdbRatingInput" value={this.state.imdbRating} onChange={this.handleChange} />
                </label>
               
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default MovieForm;