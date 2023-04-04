import ReactDOM from 'react-dom/client';
import './index.css';
import Boton from './Boton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // No puedo poner más de 1 componente juntos sin estar en un elemento o en un fragment <>
  <> 
    <Boton numero={1} />
    <Boton numero={2} />
    <Boton numero={3} />
    <Boton numero={4} />
    <Boton numero={5} />
  </>
);
