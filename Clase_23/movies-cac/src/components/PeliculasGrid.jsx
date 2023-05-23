/* import peliculas from "./peliculas.json" */
import {get} from "../utils/httpClient.js"
import { useState, useEffect } from "react"
import { PeliculaCard } from "./PeliculaCard"
import { Spinner } from "./Spinner"
import "./PeliculasGrid.css"

export const PeliculasGrid=()=>{

const [peliculas, setPeliculas] = useState([])
const [cargando, setCargando] = useState(true)
   
useEffect(()=>{
    setCargando(true)
    get("/discover/movie").then((data)=>{
        setPeliculas(data.results);
        setCargando(false)
})
},[])

if (cargando) {
    return <Spinner />;
}

return(
    <ul className="moviesGrid">
        {peliculas.map((pelicula)=>(
        <PeliculaCard key={pelicula.id} pelicula={pelicula}/>
        ))}
    </ul>
)
}