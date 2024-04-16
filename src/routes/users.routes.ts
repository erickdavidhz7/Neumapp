import usersControllers from '../controllers/users.controllers'
import express from 'express'
import { uudiV4Validator } from '../middlewares'
const router = express.Router()

//---- ACA COMIENZAN LOS ENDPOINT DE USUARIOS ----/

router.get('/', usersControllers.getAllUsers)
router.get('/:id',[uudiV4Validator('id')], usersControllers.getUserById)
router.get('/email/:email', usersControllers.getUserByEmail)

//Aca debemos agregar las demas rutas de usuarios

export default router
