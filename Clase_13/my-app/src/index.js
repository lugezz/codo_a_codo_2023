import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

// import Boton from './ejemplos/Boton';
// import {Card, Card2} from './ejemplos/Card';
import ButtonB from './ButtonB';
import CardB from './CardB';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // No puedo poner más de 1 componente juntos sin estar en un elemento o en un fragment <>
  <> 
    {/* <Boton numero={1} />
    <Card apellido="Messi" aniNacimiento={1987} clubes={["Newells", "Barcelona", "PSG"]} mundial={true} late={false} />
    
    <Boton numero={2} />  
    <Card apellido="Ronaldo" aniNacimiento={1985} clubes={["Lisboa", "Manchester", "Juve"]} mundial={false} late={true} />

    <Card2 /> */}
    <ButtonB />
    <CardB />
  </>
);
