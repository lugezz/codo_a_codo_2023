import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // 4) Importo useNavigate
import { useState } from "react"; // 7) Importamos useState
import "./Buscador.css";
export const Buscador = () => {
  const navigate = useNavigate(); // 5) Traigo la ejecucion y lo guardo en la variable
  // 1) Realiza la funcion que nos permita capturar lo que ingresamos en el input del buscador y lo envie a la url

  // 8) Estados para capturar el input
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // 3) Evitamos el submit
    navigate(`/?search=${searchText}`); // 6) Las preparo el useNavigate para enviar lo buscado a la url
  };

  return (
    <form className="buscadorContainer" onSubmit={handleSubmit}>
  
      {/* 2) Agregamos el evento */}
      <div className="buscadorBox">
        <input
          className="buscadorInput"
          /* 9) Valor del estado inicial */
          value={searchText}
          /*  10) Trabajamos con el evento onChange capturando el cambio en el input */
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
        />
        <button type="submit" className="buscadorButton">
          <FaSearch />
        </button>
      </div>
    </form>
  );
};
