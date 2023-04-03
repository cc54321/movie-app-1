import React, { Component } from 'react';
import './App.css';
import MovieForm from './Components/MovieForm';
import Table from './Components/Table';
import movieDB from './DB/Movie';
import Search from './Components/Search';




class App extends Component {

  state = movieDB;

 
  addMovie = (movie) => {
    const movies = [...this.state.movies, movie];
    this.setState({ movies });
  }

  deleteMovie = (index) => {
    const movies = [...this.state.movies];
    movies.splice(index, 1);
    this.setState({ movies });
  }

  searchMovie = (searchTerm) => {
    const movies = [...this.state.movies];
    // filter movies 
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));

    this.setState({ movies: filteredMovies });
  }

  render() {
    return (
      <div className="App">
        <h1>Classic Movie List</h1>
        <Search searchMovie={this.searchMovie} />
        <Table movieData={this.state.movies} deleteMovie={this.deleteMovie} />
        <MovieForm addMovie={this.addMovie} />
      </div>
    )
  }
}


export default App;