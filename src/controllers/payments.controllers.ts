import paymentsServices from "../services/payments.services";
import { Request, Response } from "express";

const PaymentsControllers = {
  createPayment: async (req: Request, res: Response) => {
    try {
      const orderDetails = req.body;
      const result: any = await paymentsServices.createMercadoPagoPreference(
        orderDetails
      );
      res.status(201).json({result: result, message:"Payment created"});
    } catch (error) {
      res.status(500).json({ ok: false, message: "Internal server error" });
    }
  },
  paymentCallback: async (req: Request, res: Response) => {
    try {
        const {status} = req.params
        console.log(status)
        status === null
        ? res.status(404).send('Pago Cancelado')
        : res.status(201).send('Pago Aprovado')
    } catch (error) {
        res.status(500).json({ok: false, message: 'Internal Server Error'})
    }
  }
};
export default PaymentsControllers