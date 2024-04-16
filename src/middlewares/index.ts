import { NextFunction } from 'connect'
import { Request, Response } from 'express'
import { Validator } from '../utils/validations'

export * from './auth.middleware'
export * from './reviews.middleware'
export * from './service.middleware'

export const uuidV4Validator = (paramName: string) => {
    // Closure to capture paramName
    return (req: Request, res: Response, next: NextFunction) => {
      const errors = validate(req, paramName);
      if (errors && Object.keys(errors).length > 0) {
        return res.status(400).json({ errors });
      }
      next();
    };
  };

const validate = (req: Request, paramName: string) => {
  const value = req.params[paramName]
  const validations = new Validator(paramName, value)
    .isRequired()
    .isUUIDv4()
    .getErrors()
  return validations
}
