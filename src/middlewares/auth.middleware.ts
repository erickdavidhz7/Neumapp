import { NextFunction, Request, Response } from 'express'
import { verifyToken } from '../utils/jwt.util'
import { Validator } from '../utils/validations'
import UserI from '../interfaces/user.interface'
import { Users } from '../models/user.model'

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

export const uniqueEmailValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body
    const existingEmail = await Users.findOne({ where: { email } })
    if (existingEmail) {
      return res.status(400).json({
        errors: {
          email: ['Email already in use'],
        },
      })
    }
    next()
  } catch (error) {
    console.error('Error al verificar la unicidad del usuario:', error)
    res.status(500).json({
      ok: false,
      error:
        'Ocurrió un error al procesar la solicitud. Por favor, inténtelo de nuevo más tarde.',
    })
  }
}

export const uniquePhoneValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { phoneClient } = req.body
    const existingPhoneClient = await Users.findOne({ where: { phoneClient } })
    if (existingPhoneClient) {
      return res.status(400).json({
        errors: {
          phoneClient: ['Phone already in use'],
        },
      })
    }
    next()
  } catch (error) {
    console.error('Error al verificar la unicidad del usuario:', error)
    res.status(500).json({
      ok: false,
      error:
        'Ocurrió un error al procesar la solicitud. Por favor, inténtelo de nuevo más tarde.',
    })
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
    .matches(/^\+(?:\d{1,3})?[-]?\d{1,14}$/)
    .minLength(6)
    .maxLength(24)
    .getErrors()
  const phoneClient = new Validator('phoneClient', data.phoneClient)
    .isRequired()
    .notEmpty()
    .matches(/^\+(?:\d{1,3})?[-]?\d{1,14}$/)
    .minLength(6)
    .maxLength(24)
    .getErrors()
  const latitude = new Validator('latitude', data.latitude)
    .isRequired()
    .isFloat()
    .maxLength(128)
    .getErrors()
  const longitude = new Validator('longitude', data.longitude)
    .isRequired()
    .isFloat()
    .maxLength(128)
    .getErrors()
  const errors = {
    ...firstName,
    ...lastName,
    ...email,
    ...password,
    ...phoneProvider,
    ...phoneClient,
    ...latitude,
    ...longitude
  }
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors })
  }
  next()
}
