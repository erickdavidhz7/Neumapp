import { NextFunction, Request, Response } from 'express'
import { CreateService } from '../interfaces/services.interface'

const validation = (data: CreateService) => {
  const errors: Record<string, any> = {}
  if (!data.name) {
    errors['name'] = ['Name cannot be empty']
  }
  if (data.name.length > 128) {
    errors['name'] = ['Name cannot be larger than 128']
  }
  if (data.name.length < 5) {
    errors['name'] = ['Name cannot be shorter than 4']
  }
  if (data.description && data.description.length > 512) {
    errors['description'] = ['Description cannot be larger than 256']
  }
  if (data.description && data.description.length < 5) {
    errors['description'] = ['Description cannot be shorter than 4']
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
    return res.status(400).json(hasErrors)
  }
  next()
}

const searchTermValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const searchTerm = req.params.s
  if (searchTerm.length > 64) {
    return res.status(400).json({ s: 'Search term cannot be larger than 64' })
  }
  if (searchTerm.length < 2) {
    return res.status(400).json({ s: 'Search term cannot be shorter than 2' })
  }
  const regex = /^[a-zA-Z0-9 ]+$/
  if (!regex.test(searchTerm)) {
    return res.status(400).json({ s: 'Not valid format.' })
  }
  next()
}

const paginationValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { query } = req
  if (query.page && isNaN(parseInt(query.page as string))) {
    return res.status(400).json({ page: 'Must be an integer' })
  }
  if (query.perPage && isNaN(parseInt(query.perPage as string))) {
    return res.status(400).json({ perPage: 'Must be an integer' })
  }
  next()
}

export { createServiceValidator, searchTermValidator, paginationValidator }
