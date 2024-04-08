import { Providers } from '../models/provider.model'

const providerServices = {
  createProvider: async (provider: any) => {
    try {
      if (!provider.phoneProvider || !provider.location) {
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
}
export default providerServices
