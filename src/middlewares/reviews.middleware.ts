import { NextFunction, Request, Response } from 'express'
import { Validator } from '../utils/validations'

export const createReviewValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body as { comment: string; rating: number }
  const pageValidations = new Validator('comment', data.comment)
    .isRequired()
    .isAlphanumeric()
    .getErrors()
  const perPageValidations = new Validator('rating', data.rating)
    .isRequired()
    .isInt()
    .getErrors()
  const errors = {
    ...pageValidations,
    ...perPageValidations,
  }
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors })
  }
  next()
}

export const updateReviewVAlidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body as { comment: string; rating: number }
  const idValidations = new Validator('id', req.params.id)
    .isRequired()
    .isUUIDv4()
    .getErrors()
  const pageValidations = new Validator('comment', data.comment)
    .isOptional()
    .isAlphanumeric()
    .getErrors()
  const perPageValidations = new Validator('rating', data.rating)
    .isOptional()
    .isInt()
    .getErrors()
  const errors = {
    ...idValidations,
    ...pageValidations,
    ...perPageValidations,
  }
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors })
  }
  next()
}
