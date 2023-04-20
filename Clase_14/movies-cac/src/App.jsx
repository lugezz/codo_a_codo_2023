import { PeliculasGrid } from './PeliculasGrid';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          {/* Grilla de películas */}
          <h1>React Movies</h1>
          <PeliculasGrid />

        </main>
      </header>
    </div>
  );
}

export default App;
