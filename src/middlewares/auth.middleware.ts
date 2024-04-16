import { NextFunction, Request, Response } from 'express'
import { verifyToken } from '../utils/jwt.util'
import { Validator } from '../utils/validations'
import UserI from '../interfaces/user.interface'

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
}

export const signinUserValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body as UserI
  const firstName = new Validator('firstName', data.firstName)
    .isRequired()
    .notEmpty()
    .isAlpha()
    .minLength(2)
    .maxLength(32)
    .getErrors()
  const lastName = new Validator('lastName', data.lastName)
    .isRequired()
    .notEmpty()
    .isAlpha()
    .minLength(2)
    .maxLength(32)
    .getErrors()
  const email = new Validator('email', data.email)
    .isRequired()
    .notEmpty()
    .isEmail()
    .maxLength(128)
    .getErrors()
  const password = new Validator('password', data.password)
    .isRequired()
    .notEmpty()
    .minLength(6)
    .maxLength(32)
    .getErrors()
  const phoneClient = new Validator('phoneClient', data.phoneClient)
    .isRequired()
    .notEmpty()
    .matches(/^\d+$/)
    .minLength(6)
    .maxLength(24)
    .getErrors()
  const errors = {
    ...firstName,
    ...lastName,
    ...email,
    ...password,
    ...phoneClient,
  }
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors })
  }
  next()
}

export const signinProviderValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body
  const firstName = new Validator('firstName', data.firstName)
    .isRequired()
    .notEmpty()
    .isAlpha()
    .minLength(2)
    .maxLength(32)
    .getErrors()
  const lastName = new Validator('lastName', data.lastName)
    .isRequired()
    .notEmpty()
    .isAlpha()
    .minLength(2)
    .maxLength(32)
    .getErrors()
  const email = new Validator('email', data.email)
    .isRequired()
    .notEmpty()
    .isEmail()
    .maxLength(128)
    .getErrors()
  const password = new Validator('password', data.password)
    .isRequired()
    .notEmpty()
    .minLength(6)
    .maxLength(32)
    .getErrors()
  const phoneProvider = new Validator('phoneProvider', data.phoneProvider)
    .isRequired()
    .notEmpty()
    .matches(/^\d+$/)
    .minLength(6)
    .maxLength(24)
    .getErrors()
  const phoneClient = new Validator('phoneClient', data.phoneClient)
    .isRequired()
    .notEmpty()
    .matches(/^\d+$/)
    .minLength(6)
    .maxLength(24)
    .getErrors()
  const location = new Validator('location', data.location)
    .isRequired()
    .isAlpha()
    .maxLength(128)
    .getErrors()
  const errors = {
    ...firstName,
    ...lastName,
    ...email,
    ...password,
    ...phoneProvider,
    ...phoneClient,
    ...location
  }
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors })
  }
  next()
}
