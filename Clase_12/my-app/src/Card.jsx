import "./Card.css"


export function Card({apellido, aniNacimiento, clubes, mundial, late}) {

    return (
        <>
            <h2>{apellido}</h2>
            <small>{aniNacimiento}</small>
            <p>{clubes}</p>
            <small className="small_class">{mundial ? "Es un campeón mundial 🏆": "Seguí soñando😢"}</small>
            <h6>{late ? "Tengo la figu 📚": "No tengo la figu 👎"}</h6>
        </>
    )
}

export function Card2() {

    return (
        <>
            <h1>Componente 2</h1>
        </>
    )
}
