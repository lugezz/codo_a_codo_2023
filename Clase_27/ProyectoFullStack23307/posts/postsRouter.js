import cors from "cors"
import express from "express"
import { PostModel } from "../models/PostModel.js"

const router = express.Router();

router.use(cors())

// Obtener todos los registros
const getAllPosts = async (req, res) => {
    try {
        const posts = await PostModel.findAll()
        res.json(posts)
    } catch (error) {
        res.json({error: `No se encontraron posts. ${error.message}}}`})
    }
}


// Obtener un registro por id
const getPost = async (req, res) => {
    try {
        const post = await PostModel.findByPk(req.params.id)
        res.json(post)
    } catch (error) {
        res.json({error: `No se encontró el post. ${error.message}}}`})
    }
}

// Crear un registro
const createPost = async (req, res) => {
    try {
        const post = await PostModel.create(req.body)
        res.json(post)
    } catch (error) {
        res.json({error: `No se pudo crear el post. ${error.message}}}`})
    }
}

// Actualizar un registro
const updatePost = async (req, res) => {
    try {
        const post = await PostModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json(post)
    } catch (error) {
        res.json({error: `No se pudo actualizar el post. ${error.message}}}`})
    }
}

// Eliminar un registro
const deletePost = async (req, res) => {
    try {
        const post = await PostModel.destroy({
            where: {id: req.params.id}
        })
        res.json(post)
    } catch (error) {
        res.json({error: `No se pudo eliminar el post. ${error.message}}}`})
    }
}

router.get ("/", getAllPosts)
router.get ("/:id", getPost)
router.post ("/", createPost)
router.put ("/:id", updatePost)
router.delete ("/:id", deletePost)

export default router