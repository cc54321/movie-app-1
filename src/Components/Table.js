import { Component } from 'react';


    

    const TableHeader = () => {
        return (
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Year</th>
                    <th>Plot</th>
                    <th>Actors</th>
                    <th>IMDB Rating</th>
                    <th>Date Added</th>
                </tr>
            </thead>
        )
    }
  
    const TableBody = (props) => {
        const rows = props.data.map((row, index) => {
            return (
                <tr key={index}>
                    <td>{row.title}</td>
                    <td>{row.director}</td>
                    <td>{row.year}</td>
                    <td>{row.plot}</td>
                    <td>{row.actors}</td>
                    <td>{row.imdbRating}</td>
                    <td>{row.dateAdded}</td>
                    <td>
                        <button onClick={() => props.deleteMovie(index)}>Delete</button>
                    </td>
                </tr>
            )
        });
        return <tbody>{rows}</tbody>
    }

class Table extends Component {
    render() {
        const { movieData, deleteMovie } = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody data={movieData} deleteMovie={deleteMovie} />
            </table>
        )

    }
}

export default Table;