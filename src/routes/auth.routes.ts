import express from 'express'
import UsersControllers from '../controllers/users.controllers'
import { login } from '../controllers/auth.controllers'
import {
  signinProviderValidator,
  signinUserValidator,
  uniqueEmailValidator,
  uniquePhoneValidator,
  userPhotoValidator,
} from '../middlewares'
const router = express.Router()

router.post('/login', login)
router.post(
  '/register/client',
  [
    uniqueEmailValidator,
    uniquePhoneValidator,
    userPhotoValidator('optional'),
    signinUserValidator,
  ],
  UsersControllers.registerClient
)
router.post(
  '/register/provider',
  [
    uniqueEmailValidator,
    uniquePhoneValidator,
    userPhotoValidator('required'),
    signinProviderValidator,
  ],
  UsersControllers.registerProvider
)

export default router
