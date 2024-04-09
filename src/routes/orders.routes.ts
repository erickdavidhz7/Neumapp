import OrdersControllers from '../controllers/order.controller'
import express from 'express'
const router = express.Router()

router.get('/', OrdersControllers.getAllOrders)
router.get('/getByUserId/:id', OrdersControllers.getByUserId)
router.get('/getByProviderId/:id', OrdersControllers.getByProviderId)
router.post('/createOrder', OrdersControllers.createOrder)
router.patch('/updateOrder/:id', OrdersControllers.updateOrder)

export default router
