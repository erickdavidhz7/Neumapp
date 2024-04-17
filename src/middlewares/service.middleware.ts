import { NextFunction, Request, Response } from 'express'
import { CreateService } from '../interfaces/services.interface'
import { Validator } from '../utils/validations'

const validation = (data: CreateService) => {
  const nameValidation = new Validator('name', data.name)
    .isString()
    .minLength(2)

  const descriptionValidation = new Validator('description', data.description)
    .isOptional()
    .isString()
    .minLength(2)
    .maxLength(256)
  const errors = {
    ...nameValidation.getErrors(),
    ...descriptionValidation.getErrors(),
  }

  return Object.keys(errors).length > 0 ? errors : undefined
}

const createServiceValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const hasErrors = validation({
    name: req.body.name,
    description: req.body.description,
  })
  if (hasErrors) {
    return res.status(400).json({ errors: hasErrors })
  }
  next()
}

const searchTermValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const searchTerm = req.params.s
  const sValidations = new Validator('s', searchTerm)
    .isAlphanumeric()
    .minLength(2)
    .maxLength(64)
  if (sValidations.getErrors()) {
    return res.status(400).json({ errors: sValidations.getErrors() })
  }
  next()
}

const paginationValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { query } = req
  const pageValidations = new Validator('page', query.page)
    .isOptional()
    .isInt()
    .getErrors()
  const perPageValidations = new Validator('perPage', query.perPage)
    .isOptional()
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

export { createServiceValidator, searchTermValidator, paginationValidator }
