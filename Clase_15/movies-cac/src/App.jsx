import { PeliculasGrid } from './components/PeliculasGrid';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <Link to="/">
          <h1 className='title'>Peliculas</h1>
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<PeliculasGrid />} />
        <Route path="/pelicula/:peliculaId" element="Detalle de películas"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
