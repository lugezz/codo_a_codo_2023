import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Counter } from './Counter';


function CardB() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Título del Producto</Card.Title>
        <Card.Text>
          Esta es la información del Producto
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
        </Card.Text>
        <Counter />
        <Button variant="primary">Más información</Button>
      </Card.Body>
    </Card>
  );
}

export default CardB;