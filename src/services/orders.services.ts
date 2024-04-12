import { Orders } from '../models/order.model'
import OrderI from '../interfaces/order.interface'

const ordersServices = {
  getAllOrders: async () => {
    try {
      const orders = await Orders.findAll()
      return orders
    } catch (error) {
      throw new Error(error as string)
    }
  },
  getByUserId: async (id: string) => {
    try {
      const orders = await Orders.findAll({
        where: { UserId: id },
      })
      return orders
    } catch (error) {
      throw new Error(error as string)
    }
  },
  getByProviderId: async (id: string) => {
    try {
      const order = await Orders.findAll({
        where: { ProviderId: id },
      })
      return order
    } catch (error) {
      throw new Error(error as string)
    }
  },
  createOrder: async (orderData: OrderI) => {
    try {
      if (
        !orderData.ServiceId ||
        !orderData.ProviderId ||
        !orderData.UserId ||
        !orderData.location
      ) {
        throw new Error('Missing Data' as string)
      }
      const randomSixDigitNumber = Math.floor(100000 + Math.random() * 900000)

      const newOrder = await Orders.create({
        type: 'delivery',
        location: orderData.location,
        code: randomSixDigitNumber,
        description: orderData.description || '',
        status: 'started',
        ServiceId: orderData.ServiceId,
        UserId: orderData.UserId,
        ProviderId: orderData.ProviderId,
      })
      return newOrder
    } catch (error) {
      throw new Error(error as string)
    }
  },
  updateOrder: async (id: string, newData: any) => {
    try {
      const orderToUpdate = await Orders.findByPk(id)
      if (!orderToUpdate) {
        throw new Error('Id not found in database' as string)
      }
      orderToUpdate.set(newData)
      await orderToUpdate.save()
      return orderToUpdate
    } catch (error) {
      throw new Error(error as string)
    }
  },
}
export default ordersServices