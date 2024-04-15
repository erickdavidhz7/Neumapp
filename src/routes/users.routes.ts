import usersControllers from '../controllers/users.controllers'
import express from 'express'
const router = express.Router()

//---- ACA COMIENZAN LOS ENDPOINT DE USUARIOS ----/

router.get('/', usersControllers.getAllUsers)
router.get('/:id', usersControllers.getUserById)
router.get('/email/:email', usersControllers.getUserByEmail)

//Aca debemos agregar las demas rutas de usuarios

export default router
