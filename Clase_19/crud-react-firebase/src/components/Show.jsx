import {useState,useEffect} from "react"
import{collection,getDocs,deleteDoc,doc} from "firebase/firestore"
import { Link } from "react-router-dom";
import{db} from "../firebaseConfig/firebase"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const mySwal=withReactContent(Swal)


export const Show = () =>{
    //1 configurar los hooks
const [players,setPlayers] = useState([])
    //2 referenciamos a la db de firestore
const playersCollection = collection(db, "players")
    //3 funcion para mostrar todos los docs
const getPlayers = async () =>{
    const data = await getDocs(playersCollection)
    console.log(data.docs);
    setPlayers(                 //
        data.docs.map((doc)=>({...doc.data(), id:doc.id}))
    )
    console.log(players);
}
    //4 funcion para eliminar un doc

const deletePlayer = async (id)=>{
    const playersDoc = doc(db, "players", id)
    await deleteDoc (playersDoc)
    getPlayers()
}
    //5 funcion para la confirmacion de sweet alert
const confirmDelete=(id)=>{
    Swal.fire({
        title: 'Estas seguro/a?',
        text: "No podes revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, quiero borrarlo!'
        }).then((result) => {
            if (result.isConfirmed) {
                deletePlayer(id)  //llamamos a la funcion eliminar
                Swal.fire(
                'Borrado!',
                'Borraste tu jugador.',
                'success'
                )
            }
        })
}

    //6 useEffect 
useEffect(()=>{
    getPlayers()
},[])



// 7 devolvermos la vista de nuestro componente
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="d-grid gap-p">
                        <Link to="/create" className="btn btn-secondary mt-2 mb-2">Agregar Jugador</Link>
                    </div>    
                </div>
            </div>

            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">Número</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Posición</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player)=>(
                        <tr key={player.id}>
                            <th scope="row">{player.number}</th>
                            <td>{player.lastName}</td>
                            <td>{player.firstName}</td>
                            <td>{player.position}</td>
                            <td>
                                <Link to={`/edit/${player.id}`} className="btn btn-light">
                                    <i class="fa-solid fa-pencil"></i>
                                </Link>
                                <button className="btn btn-danger" onClick={()=>confirmDelete(player.id)}>
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        )

}