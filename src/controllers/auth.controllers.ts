import { Request, Response } from 'express'
import { loginUser } from '../services/auth.services'

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ ok: false, message: 'Missing Data' })
    }
    const userData = await loginUser(email, password)

    if (userData) {
      return res.status(200).json({ ok: true, ...userData })
    } else {
      throw { status: 400, msg: 'Invalid Credentials' }
    }
  } catch (error: any) {
    console.log(error)
    if (error.status) {
      return res.status(error.status).json({ ok: false, message: error.msg })
    }
    return res.status(500).json({ ok: false, message: 'Internal server error' })
  }
}
