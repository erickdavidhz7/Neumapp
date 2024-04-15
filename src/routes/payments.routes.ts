import express from 'express'
import PaymentsControllers from '../controllers/payments.controllers'

const router = express.Router()

router.post('/', PaymentsControllers.createPayment)
router.get('/callback', PaymentsControllers.paymentCallback)

export default router