import paymentsServices from '../services/payments.services'
import { Request, Response } from 'express'

const PaymentsControllers = {
  createPayment: async (req: Request, res: Response) => {
    try {
      const orderDetails = req.body
      const result: any = await paymentsServices.createMercadoPagoPreference(
        orderDetails
      )
      res.status(201).json({ result: result, message: 'Payment created' })
    } catch (error) {
      res.status(500).json({ ok: false, message: 'Internal server error' })
    }
  },
  paymentFeedback: async (req: Request, res: Response) => {
    try {
      res.status(201).json({
        Payment: req.query.payment_id,
        Status: req.query.status,
        MerchantOrder: req.query.merchant_order_id
      });
    } catch (error) {
      res.status(500).json({ ok: false, message: 'Internal Server Error' })
    }
  },
}
export default PaymentsControllers
