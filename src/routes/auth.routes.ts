import express from 'express';
import UsersControllers from '../controllers/users.controllers';
import { login } from '../controllers/auth.controllers';
const router = express.Router();

router.post('/login', login)
router.post('/register', UsersControllers.registerUser)

export default router