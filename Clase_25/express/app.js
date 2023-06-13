/* const express = require ("express") */
import express from "express" // importo express

const app = express() // guardo sus metodos en una variable

const port = 3030 // defino el puerto

app.get("/",(req,res)=>{
    res.send("Estas en el index")
})

app.get("/contacto",(req,res)=>{
    res.send("Estas en contactos")
})

app.listen (port,()=>{
    console.log(`Servidor con express ok en el puerto ${port}`);
})




