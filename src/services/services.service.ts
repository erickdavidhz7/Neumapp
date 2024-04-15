import { Op } from 'sequelize'
import { Service } from '../models/services.model'
import { CreateService } from '../interfaces/services.interface'

const servicesService = {
  async createService(newServiceData: CreateService) {
    try {
      const existService = await Service.findOne({
        where: {
          name: {
            [Op.iLike]: `${newServiceData.name}`,
          },
        },
      })
      if (existService) {
        throw { status: 400, msg: 'Service already exists' }
      }
      const newService = await Service.create({
        ...newServiceData,
      })
      return newService
    } catch (error) {
      throw error
    }
  },

  async getAll(page: number, perPage: number) {
    const [_page, _perPage] = limitPaginationQuery(page, perPage)
    try {
      const servicesList = await Service.findAndCountAll({
        offset: (_page - 1) * _perPage,
        limit: _perPage,
        order: [['name', 'DESC']],
      })
      return {
        data: servicesList.rows,
        totalResults: servicesList.count,
        totalPages: Math.ceil(servicesList.count / _perPage),
        currentPage: _page,
      }
    } catch (error) {
      throw error
    }
  },

  async searchByTerm(searchTerm: string, page: number, perPage: number) {
    const [_page, _perPage] = limitPaginationQuery(page, perPage)
    try {
      const result = await Service.findAndCountAll({
        where: {
          name: {
            [Op.iLike]: `%${searchTerm}%`, // Remember iLike only works with Postgres
          },
        },
        order: [['name', 'DESC']],
      })
      return {
        data: result.rows,
        totalResults: result.count,
        totalPages: Math.ceil(result.count / _perPage),
        currentPage: _page,
      }
    } catch (error) {
      throw error
    }
  },

  async getServiceById(serviceId:string){
    return await Service.findByPk(serviceId)
  }
}

const limitPaginationQuery = (page: number, perPage: number) => {
  const _page = isNaN(page) || page < 1 ? 1 : page
  const _perPage = isNaN(perPage) || perPage > 10 ? 10 : perPage
  return [_page, _perPage]
}

export default servicesService
