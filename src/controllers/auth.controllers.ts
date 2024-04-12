import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { loginUser } from '../services/auth.services'
import { envs } from '../utils/constants'

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ message: 'Missing Data' })
    }

    const token = await loginUser(email, password)

    if (token) {
      return res.status(200).json({ message: 'User Logged', token })
    } else {
      res.status(401).json({ message: 'Invalid Credentials' })
    }
  } catch (error) {
    throw new Error('Un error en aut controller')
  }
}