import {useState,useEffect} from "react"
import{collection,getDocs,deleteDoc,doc} from "firebase/firestore"
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
    // getPlayers()
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
        <> 

        </>
        )

}