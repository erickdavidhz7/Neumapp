import usersControllers from '../controllers/users.controllers'
import express from 'express'
const router = express.Router()

//---- ACA COMIENZAN LOS ENDPOINT DE USUARIOS ----/

router.get('/', usersControllers.getAllUsers)

//Aca debemos agregar las demas rutas de usuarios

export default router;