import ReactDOM from 'react-dom/client';
import './index.css';
// import Boton from './Boton';

import {Card, Card2} from './Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // No puedo poner más de 1 componente juntos sin estar en un elemento o en un fragment <>
  <> 
    <Card apellido="Messi" aniNacimiento={1987} clubes={["Newells", "Barcelona", "PSG"]} mundial={true} late={false} />
    <Card apellido="Ronaldo" aniNacimiento={1985} clubes={["Lisboa", "Manchester", "Juve"]} mundial={false} late={true} />
    <Card2 />
  </>
);
