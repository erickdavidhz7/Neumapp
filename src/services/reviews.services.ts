import { Reviews } from '../models/review.model'

const reviewsServices = {
  getAllReviews: async () => {
    try {
      const reviews = await Reviews.findAll()
      return reviews
    } catch (error) {
      return 'Error al buscar Reviews'
    }
  },
  getByUserId: async (id: string) => {
    try {
      const reviews = await Reviews.findOne({
        where: { UserId: id },
      })
      return reviews
    } catch (error) {
      return 'Error al buscar Reviews'
    }
  },
  getByProviderId: async (id: string) => {
    try {
      const reviews = await Reviews.findOne({
        where: { ProviderId: id },
      })
      return reviews
    } catch (error) {
      return 'Error al buscar Reviews'
    }
  },
}
export default reviewsServices
