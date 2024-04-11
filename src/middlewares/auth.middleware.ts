import { NextFunction, Request, Response } from 'express'
import { verifyToken } from '../utils/jwt.util'

export const tokenValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers['x-authorization']

  if (!token) {
    return res.status(401).json({ ok: false, message: 'Token not found' })
  }

  try {
    const decoded = verifyToken(token as string)
    req.user = decoded
    next()
  } catch (error) {
    return res.status(403).json({ ok: false, message: 'Invalid token' })
  }
  next()
}
