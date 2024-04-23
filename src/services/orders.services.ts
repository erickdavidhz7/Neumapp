import { Orders } from '../models/order.model'
import OrderI from '../interfaces/order.interface'
import { ProviderServices } from '../models/provider_services.model'
import { Service } from '../models/services.model'

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
  updateOrder: async (id: string, newData: Partial<OrderI>) => {
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
  createNewOrder: async (orderData: OrderI) => {
    try {
      const service = await Service.findByPk(orderData.ServiceId)
      if (!service) {
        throw { status: 404, msg: 'Service does not exist' }
      }
      const serviceProvider = await ProviderServices.findOne({
        where: {
          ServiceId: orderData.ServiceId,
          ProviderId: orderData.ProviderId,
        },
      })
      if (!serviceProvider) {
        throw { status: 404, msg: 'Provider does not offers the service' }
      }
      orderData.ProviderServiceId = serviceProvider.dataValues.id
      const newOrder = await createOrder(orderData)
      return newOrder
    } catch (error) {
      throw error
    }
  },
}
export default ordersServices

const createOrder = async (orderData: OrderI) => {
  try {
    if (
      !orderData.ProviderId ||
      !orderData.UserId ||
      !orderData.latitude ||
      !orderData.longitude ||
      !orderData.ProviderServiceId
    ) {
      throw new Error('Missing Data' as string)
    }
    const randomSixDigitNumber = Math.floor(100000 + Math.random() * 900000)
    console.log(orderData)

    const newOrder = await Orders.create(
      {
        type: 'delivery',
        latitude: orderData.latitude,
        longitude: orderData.longitude,
        code: randomSixDigitNumber,
        description: orderData.description || '',
        status: 'started',
        UserId: orderData.UserId,
        ProviderId: orderData.ProviderId,
        ProviderServiceId: orderData.ProviderServiceId,
      }
    )
    return newOrder
  } catch (error) {
    throw new Error(error as string)
  }
}