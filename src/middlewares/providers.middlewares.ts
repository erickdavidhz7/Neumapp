import { NextFunction, Request, Response } from 'express'
import { Validator } from '../utils/validations'

export const getNearProvidersValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const distance = new Validator('distance', req.query.distance)
    .isRequired()
    .isInt()
    .maxLength(5)
    .getErrors()
  const lat = new Validator('lat', req.query.lat)
    .isRequired()
    .isFloat()
    .maxLength(15)
    .getErrors()
  const long = new Validator('long', req.query.long)
    .isRequired()
    .isFloat()
    .maxLength(15)
    .getErrors()
  const errors = {
    ...distance,
    ...lat,
    ...long
  }
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors })
  }
  next()
}
