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
        UserId: provider.UserId
      })
      return newProvider
    } catch (error) {
      throw new Error(error as string)
    }
  },
  getAllPrviders: async () => {
    try {
      const providers = await Providers.findAll({
        include: Reviews
      })
      return providers
    } catch (error) {
      console.log(error)
      throw new Error(error as string)
    }
  }
}
export default providerServices
