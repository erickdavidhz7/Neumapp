import providerServices from '../services/providers.services'
import { Request, Response } from 'express'

const ProvidersControllers = {
  createProvider: async (req: Request, res: Response) => {
    try {
      const { UserId, phoneProvider, location } = req.body
      if (!UserId || !phoneProvider || !location) {
        res.status(400).json({ message: 'Missing Provider Data' })
      }
      const provider: any = await providerServices.createProvider({
        UserId,
        phoneProvider,
        location,
      })
      res.status(201).json(provider)
    } catch (error) {
      res.status(500).json('Internal Server Error')
    }
  },
  getAllProviders: async (req: Request, res: Response) => {
    try {
      const allProviders: any = await providerServices.getAllProviders()
      if (allProviders.length > 0) res.status(201).json(allProviders)
      else res.status(404).send('Providers not Found')
    } catch (error) {
      res.status(500).send('Internal Server Error')
    }
  },
  getProviderById: async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      const provider: any = await providerServices.getProviderById(id)
      if (provider) res.status(201).json(provider)
      else res.status(404).send('Provider not Found')
    } catch (error) {
      res.status(500).send('Internal Server Error')
    }
  },
}
export default ProvidersControllers
