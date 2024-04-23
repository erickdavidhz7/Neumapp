import { NextFunction, Request, Response } from 'express'
import OrderI from '../interfaces/order.interface'
import { Validator } from '../utils/validations'

export const createOrderValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data: OrderI = req.body

  const providerId = new Validator('ProviderId', data.ProviderId)
    .isRequired()
    .isUUIDv4()
    .getErrors()

  const userId = new Validator('UserId', data.UserId)
    .isRequired()
    .isUUIDv4()
    .getErrors()

  const serviceId = new Validator('ServiceId', data.ServiceId)
    .isRequired()
    .isUUIDv4()
    .getErrors()

  const lat = new Validator('latitude', data.latitude)
    .isRequired()
    .isFloat()
    .maxLength(20)
    .getErrors()

  const long = new Validator('longitude', data.longitude)
    .isRequired()
    .isFloat()
    .maxLength(20)
    .getErrors()

  const description = new Validator('description', data.description)
    .isOptional()
    .isString()
    .isAlphanumericExtended()
    .maxLength(512)
    .getErrors()

  const errors = {
    ...providerId,
    ...userId,
    ...serviceId,
    ...lat,
    ...long,
    ...description,
  }
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors })
  }
  next()
}
