import "./PeliculaCard.css"

export const PeliculaCard = ({pelicula}) => {
    return (
        <li className="moviesCard">
            <img  className="movieImage" src={`https://image.tmdb.org/t/p/w300${pelicula.poster_path}`} alt={pelicula.title} />
            <h3>{pelicula.original_title}</h3>
            <p>{pelicula.vote_average}</p>
        </li>
    )
}