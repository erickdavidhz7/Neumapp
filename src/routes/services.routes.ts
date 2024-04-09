import express from 'express'
import servicesController from '../controllers/services.controller'
import {
  createServiceValidator,
  paginationValidator,
  searchTermValidator,
} from '../middlewares/service.middleware'
const servicesRouter = express.Router()

servicesRouter.post('/', [createServiceValidator], servicesController.create)
servicesRouter.get('/', [paginationValidator], servicesController.getAll)
servicesRouter.get(
  '/search/:s',
  [searchTermValidator, paginationValidator],
  servicesController.searchByTerm
)

export default servicesRouter
