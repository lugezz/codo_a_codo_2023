import "./Buscador.css";

import { FaSearch } from "react-icons/fa";
import { get } from "../utils/httpClient.js";
import { PeliculaCard } from "./PeliculaCard";
import { Spinner } from "./Spinner";
import { useState } from "react";

export const Buscador = () => {
    const [query, setQuery] = useState("");
    const [peliculas, setPeliculas] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(false);

    const search = (evt) => {
        evt.preventDefault();
        setCargando(true);
        get(`/search/movie?query=${query}`).then((data) => {
            if (data.results.length === 0) {
                setError(true);
            } else {
                setError(false);
            }
            setPeliculas(data.results);
            setCargando(false);
        });
    };

    return (
        <div>
            <form className="buscadorContainer" onSubmit={search}>
                <div className="buscadorBox">
                    <input
                        className="buscadorInput"
                        type="text"
                        value={query}
                        onChange={(evt) => setQuery(evt.target.value)}
                    />
                    <button className="buscadorButton" type="submit"><FaSearch/></button>
                </div>
            </form>
            {cargando && <Spinner />}
            {error && <div>No se encontraron resultados</div>}
            <ul className="moviesGrid">
                {peliculas.map((pelicula) => (
                    <PeliculaCard key={pelicula.id} pelicula={pelicula} />
                ))}
            </ul>
        </div>
    );
}