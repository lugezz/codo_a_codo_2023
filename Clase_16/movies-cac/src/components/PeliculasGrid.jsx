/* import peliculas from "./peliculas.json" */
import {get} from "../utils/httpClient.js"
import { useState, useEffect } from "react"
import { PeliculaCard } from "./PeliculaCard"
import "./PeliculasGrid.css"

export const PeliculasGrid=()=>{

const [peliculas,setPeliculas] = useState([])
   
useEffect(()=>{
get("/discover/movie").then((data)=>{
    setPeliculas(data.results);
})
},[])

return(
    <ul className="moviesGrid">
        {peliculas.map((pelicula)=>(
        <PeliculaCard key={pelicula.id} pelicula={pelicula}/>
        ))}
    </ul>
)
}