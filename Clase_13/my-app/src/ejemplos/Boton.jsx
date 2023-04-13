

// Es mayúscula cuando es un componente

function Boton (props) {

    return (
        <button onClick={()=> console.log("Hiciste clic")} >{props.numero}</button>
    )
}

export default Boton;