import { get } from "../utils/httpClient"
import "./PeliculasGrid.css"
import { useEffect, useState } from "react"
import { PeliculaCard } from "./PeliculaCard"

export const PeliculasGrid = () => {
    const [peliculas, setPeliculas] = useState([])

    useEffect(() => {
        get("/discover/movie")
            .then( data => setPeliculas(data) )
    }, [])

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