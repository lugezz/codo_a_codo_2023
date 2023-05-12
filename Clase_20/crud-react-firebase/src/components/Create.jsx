import {useState,useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {collection,addDoc} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase"


const playersCollection = collection(db, "players")

export const Create = () =>{
    const [lastName, setLastName] = useState("");
    const [name, setName] = useState("");
    const [number, setNumber] = useState(0);
    const [position, setPosition] = useState("");

    const navigate = useNavigate();

    const playersCollection = collection(db, "players");

    const createPlayer = async (e) => {
        e.preventDefault();
        await addDoc(playersCollection, {
          lastName: lastName,
          name: name,
          number: Number(number),
          position: position,
        });
        navigate("/");
      };

    return(
        <div className="container">
            <div className="row">
                <div className="row">
                <h1>Crear Jugador</h1>
                <form onSubmit={createPlayer}>
                    <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                    </div>

                    <div className="mb-3">
                    <label className="form-label">Apellido</label>
                    <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                    </div>

                    <div className="mb-3">
                    <label className="form-label">Número</label>
                    <input
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        type="number"
                        className="form-control"
                    />
                    </div>

                    <div className="mb-3">
                    <label className="form-label">Posición</label>
                    <input
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        type="text"
                        className="form-control"
                    />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Crear Jugador
                    </button>
                </form>
                </div>
            </div>
        </div>
    )
}
