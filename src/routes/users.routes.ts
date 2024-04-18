import usersControllers from '../controllers/users.controllers'
import express from 'express'
import { uuidV4Validator } from '../middlewares'
const router = express.Router()

//---- ACA COMIENZAN LOS ENDPOINT DE USUARIOS ----/

router.get('/', usersControllers.getAllUsers)
router.get('/:id', [uuidV4Validator('id')], usersControllers.getUserById)
router.get('/email/:email', usersControllers.getUserByEmail)
router.patch('/:id', [uuidV4Validator('id')], usersControllers.updateUser)

//Aca debemos agregar las demas rutas de usuarios

export default router
