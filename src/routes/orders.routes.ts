import OrdersControllers from '../controllers/order.controller'
import express from 'express'
import { uudiV4Validator } from '../middlewares'
const router = express.Router()

router.get('/', OrdersControllers.getAllOrders)
router.get(
  '/UserId/:id',
  [uudiV4Validator('id')],
  OrdersControllers.getByUserId
)
router.get(
  '/ProviderId/:id',
  [uudiV4Validator('id')],
  OrdersControllers.getByProviderId
)
router.post('/', OrdersControllers.createOrder)
router.patch('/:id', OrdersControllers.updateOrder)

export default router
