import { Request, Response } from 'express'
import servicesService from '../services/services.service'

const servicesController = {
  async create(req: Request, res: Response) {
    try {
      const data = await servicesService.createService(req.body)
      return res.status(200).json(data)
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
  async getAll(req: Request, res: Response) {
    const { query } = req
    const page = parseInt(query.page as string, 10)
    const perPage = parseInt(query.perPage as string, 10)
    try {
      const data = await servicesService.getAll(page, perPage)
      return res.status(200).json(data)
    } catch (error: any) {
      console.log(error)
      return res
        .status(500)
        .json({ ok: false, message: 'Internal server error' })
    }
  },
  async searchByTerm(req: Request, res: Response) {
    const { query, params } = req
    const page = parseInt(query.page as string, 10)
    const perPage = parseInt(query.perPage as string, 10)
    try {
      const data = await servicesService.searchByTerm(
        params['s'],
        page,
        perPage
      )
      return res.status(200).json(data)
    } catch (error: any) {
      console.log(error)
      return res
        .status(500)
        .json({ ok: false, message: 'Internal server error' })
    }
  },
}

export default servicesController
