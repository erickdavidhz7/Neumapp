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
  paymentCallback: async (req: Request, res: Response) => {
    try {
      const { status } = req.query
      console.log(status)
      if (status == 'null') {
        res.status(404).redirect('https://dev.neumapp.site/')
      }
      else {
        res.status(201).redirect('https://dev.neumapp.site/')
      }
    } catch (error) {
      res.status(500).json({ ok: false, message: 'Internal Server Error' })
    }
  },
}
export default PaymentsControllers
