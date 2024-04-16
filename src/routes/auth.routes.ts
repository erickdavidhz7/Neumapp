import express from 'express'
import UsersControllers from '../controllers/users.controllers'
import { login } from '../controllers/auth.controllers'
import {
  signinProviderValidator,
  signinUserValidator,
} from '../middlewares/auth.middleware'
const router = express.Router()

router.post('/login', login)
router.post(
  '/register/client',
  [signinUserValidator],
  UsersControllers.registerClient
)
router.post(
  '/register/provider',
  [signinProviderValidator],
  UsersControllers.registerProvider
)

export default router
