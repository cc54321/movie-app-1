import movieDB from '../DB/Movie';
import { Link, useParams } from 'react-router-dom';


// the database is in the file DB/Movie.js

export default function MoviePage() {
    const { filmTitle } = useParams();
    const movie = movieDB.movies.find((movie) => movie.title === filmTitle);
    return (
        <div>
            <h1>{movie.title}</h1>
            <p> <strong>Year of release:</strong> {movie.year}</p>
            <p> <strong>Director:</strong> {movie.director}</p>
            {/* <p> <strong>Actors:</strong> {movie.actors}</p> */}
            <p> <strong>Genre:</strong> {movie.genre}</p>
            <p><strong>IMDB rating:</strong> {movie.imdbRating}</p>
            <p> <strong>Plot: </strong> {movie.plot}</p>
            <Link to="/movies">Back to movies</Link>
        </div>
    );

}

