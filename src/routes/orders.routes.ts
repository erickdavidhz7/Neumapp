import OrdersControllers from '../controllers/order.controller'
import express from 'express'
import { uuidV4Validator } from '../middlewares'
const router = express.Router()

router.get('/', OrdersControllers.getAllOrders)
router.get('/UserId/:id', [uuidV4Validator],OrdersControllers.getByUserId)
router.get('/ProviderId/:id', OrdersControllers.getByProviderId)
router.post('/', OrdersControllers.createOrder)
router.patch('/:id', OrdersControllers.updateOrder)

export default router
