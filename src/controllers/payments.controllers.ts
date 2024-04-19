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
      switch (req.query.status) {
        case 'null':
          res.redirect('https://dev.neumapp.site/')
          break
        case 'approved':
          res.redirect('https://dev.neumapp.site/')
          break
        case 'rejected':
          res.redirect('https://dev.neumapp.site/')
          break
        default:
          break
      }
    } catch (error) {
      res.status(500).json({ ok: false, message: 'Internal Server Error' })
    }
  },
}
export default PaymentsControllers
