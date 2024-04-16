import express from 'express'
import PaymentsControllers from '../controllers/payments.controllers'

const router = express.Router()

router.post('/', PaymentsControllers.createPayment)
router.get('/feedback', PaymentsControllers.paymentFeedback)

export default router