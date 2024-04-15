import { ProviderI } from '../interfaces/provider.interface'
import { Providers } from '../models/provider.model'
import { Reviews } from '../models/review.model'

const providerServices = {
  createProvider: async (provider: ProviderI) => {
    try {
      if (!provider.phoneProvider || !provider.location || !provider.UserId) {
        throw new Error('Mission Data')
      }
      const newProvider = await Providers.create({
        phoneProvider: provider.phoneProvider,
        location: provider.location,
        UserId: provider.UserId,
      })
      return newProvider
    } catch (error) {
      throw new Error(error as string)
    }
  },
  getAllProviders: async () => {
    try {
      const providers = await Providers.findAll({
        include: Reviews,
      })
      return providers
    } catch (error) {
      console.log(error)
      throw new Error(error as string)
    }
  },
  getProviderById: async (id: string) => {
    try {
      const userId = await Providers.findOne({
        where: {
          id,
        },
        include: Reviews,
      })
      return userId
    } catch (error) {
      throw new Error('Error Searching The Data')
    }
  },
  updateProvider: async (id: string, newData: any) => {
    try {
      const providerToUpdate = await Providers.findByPk(id)
      if (!providerToUpdate) {
        throw new Error('Id not found in database' as string)
      }
      const updatedProvider = await providerToUpdate.update(newData)
      return updatedProvider
    } catch (error) {
      throw new Error(error as string)
    }
  },
}
export default providerServices
