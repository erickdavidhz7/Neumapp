import { Request, Response } from 'express'
import ordersServices from '../services/orders.services'

const OrdersControllers = {
  getAllOrders: async (req: Request, res: Response) => {
    try {
      const orders = await ordersServices.getAllOrders()
      if (orders.length > 0) res.status(200).send(orders)
      else res.status(400).send('No existen Reviews en la Base de Datos')
    } catch (error) {
      res.status(500).send('Internal Server Error')
    }
  },
  getByUserId: async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      const orders = await ordersServices.getByUserId(id)
      if (orders) res.status(200).send(orders)
      else res.status(400).send(orders)
    } catch (error) {
      res.status(500).send('Internal Server Error')
    }
  },
  getByProviderId: async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      const orders = await ordersServices.getByProviderId(id)
      if (orders) res.status(201).json(orders)
      else res.status(400).send(orders)
    } catch (error) {
      res.status(500).send('Internal Server Error')
    }
  },
  createOrder: async (req: Request, res: Response) => {
    const orderData = req.body
    try {
      const newOrder = await ordersServices.createOrder(orderData)
      res.status(201).json(newOrder)
    } catch (err) {
      res.status(500).send('Internal server error')
    }
  },
  updateOrder: async (req: Request, res: Response) => {
    const { id } = req.params
    const orderData = req.body
    try {
      const updatedOrder = await ordersServices.updateOrder(id, orderData)
      res.status(200).json(updatedOrder)
    } catch (err) {
      res.status(500).send('Internal server error')
    }
  },
}
export default OrdersControllers
