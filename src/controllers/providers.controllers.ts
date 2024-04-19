import providerServices from '../services/providers.services'
import { Request, Response } from 'express'
//-34.576723,-58.403042, //Museo de arte Latinoamericano de Buenos Aires... esquina

const ProvidersControllers = {
  createProvider: async (req: Request, res: Response) => {
    try {
      const { UserId, phoneProvider, latitude, longitude } = req.body
      if (!UserId || !phoneProvider || !latitude || !longitude) {
        res.status(400).json({ ok: false, message: 'Missing Provider Data' })
      }
      const provider: any = await providerServices.createProvider({
        UserId,
        phoneProvider,
        latitude,
        longitude,
      })
      res.status(201).json(provider)
    } catch (error) {
      res.status(500).json({ ok: false, message: 'Internal server error' })
    }
  },
  getAllProviders: async (req: Request, res: Response) => {
    try {
      const allProviders: any = await providerServices.getAllProviders()
      if (allProviders.length > 0) res.status(201).json(allProviders)
      else res.status(404).send('Providers not Found')
    } catch (error) {
      res.status(500).json({ ok: false, message: 'Internal server error' })
    }
  },
  getProviderById: async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      const provider: any = await providerServices.getProviderById(id)
      if (provider) res.status(201).json(provider)
      else res.status(404).send('Provider not Found')
    } catch (error) {
      res.status(500).json({ ok: false, message: 'Internal server error' })
    }
  },
  updateProvider: async (req: Request, res: Response) => {
    const { id } = req.params
    const providerData = req.body
    try {
      const updatedProvider = await providerServices.updateProvider(
        id,
        providerData
      )
      res.status(200).json(updatedProvider)
    } catch (err) {
      res.status(500).json({ ok: false, message: 'Internal server error' })
    }
  },
  getProvidersByDistance: async (req: Request, res: Response) => {
    try {
      const { distance, lat, long, serviceId } = req.query
      const data = await providerServices.getProvidersByDistance(
        parseFloat(lat as string),
        parseFloat(long as string),
        parseInt(distance as string),
      )
      return res.json(data)
    } catch (error: any) {
      console.log(error)
      if (error.status) {
        return res.status(error.status).json({ ok: false, message: error.msg })
      }
      return res
        .status(500)
        .json({ ok: false, message: 'Internal server error' })
    }
  },
}
export default ProvidersControllers
