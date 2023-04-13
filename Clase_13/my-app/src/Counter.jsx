import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

export const Counter = () => {
    const [count, setCount] = useState(0);
    

    useEffect(() => {
        console.log("Cambió el valor de count");
        return () => {
            console.log("Se ejecuta cuando se desmonta el componente");
        }
    }, [count]);
    return (
        <>
        <p>Has elegido {count} productos</p>
        <Button variant="success" size="sm" onClick={() => setCount(count + 1)}>+</Button>
        <Button variant="secondary" size="sm" onClick={() => setCount(Math.max(0, count - 1))}>-</Button>
        </>
    );
    }