import OrdersControllers from '../controllers/order.controller'
import express from 'express'
const router = express.Router()

router.get('/', OrdersControllers.getAllOrders)
router.get('/UserId/:id', OrdersControllers.getByUserId)
router.get('/ProviderId/:id', OrdersControllers.getByProviderId)
router.post('/', OrdersControllers.createOrder)
router.patch('/:id', OrdersControllers.updateOrder)

export default router
