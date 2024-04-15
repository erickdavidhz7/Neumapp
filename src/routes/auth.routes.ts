import express from 'express'
import UsersControllers from '../controllers/users.controllers'
import { login } from '../controllers/auth.controllers'
const router = express.Router()

router.post('/login', login)
router.post('/register/client', UsersControllers.registerClient)
router.post('/register/provider', UsersControllers.registerProvider)

export default router
