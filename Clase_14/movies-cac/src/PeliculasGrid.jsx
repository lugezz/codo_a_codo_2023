import "./PeliculasGrid.css"
import { PeliculaCard } from "./PeliculaCard"
import peliculas from './peliculas.json'

export const PeliculasGrid = () => {
    return (
        <ul className="moviesGrid">
            {
                peliculas.map( pelicula => (
                    <PeliculaCard key={pelicula.id} pelicula={pelicula} />
                ))
            }
        </ul>
    )
}