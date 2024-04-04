const usersControllers = require('../controllers/users.controllers.ts')
const { Router } = require('express')
const router = Router()

//---- ACA COMIENZAN LOS ENDPOINT DE USUARIOS ----/

router.get('/', usersControllers.getAllUsers)

//Aca debemos agregar las demas rutas de usuarios

module.exports = router;