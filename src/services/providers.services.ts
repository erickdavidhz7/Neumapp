import { Providers } from '../models/provider.model'
import { Reviews } from '../models/review.model'
import { Users } from '../models/user.model'

const providerServices = {
  createProvider: async (provider: any) => {
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
}
export default providerServices
