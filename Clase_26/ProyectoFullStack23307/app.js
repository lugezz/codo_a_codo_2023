import cors from "cors"
import { db } from "./database/db.js"
import express from "express"

const app = express()

const port = 8000

app.use(cors())
app.use(express.json())

try {
    await db.authenticate()
    console.log("Conexión exitosa")
} catch (error) {
    console.log("Error al conectar a la DB", error)
}


app.get ("/",(req, res)=>{
    res.send("Estas en el index(respuesta del servidor)")
})

// app.get (/:id",(req, res)=>{
//     res.send("Estas en el index(respuesta del servidor)")
// })

// app.delete("/delete/{:id}",(req, res)=>{
//     res.send("Estas en el delete")
// })

app.listen (port,()=>{
    console.log(`Servidor ok en el puerto ${port}`);
})