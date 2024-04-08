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
      const reviews = await Reviews.findAll({
        where: { UserId: id },
      })
      return reviews
    } catch (error) {
      return 'Error al buscar Reviews'
    }
  },
  getByProviderId: async (id: string) => {
    try {
      const reviews = await Reviews.findAll({
        where: { ProviderId: id },
      })
      return reviews
    } catch (error) {
      return 'Error al buscar Reviews'
    }
  },
  createReview: async (reviewData: any) => {
    try {
      if (
        !reviewData.comment ||
        !reviewData.rating ||
        !reviewData.UserId ||
        !reviewData.ProviderId
      ) {
        throw new Error('Missing Data')
      }
      const newReview =  await Reviews.create({
        comment: reviewData.comment,
        rating: reviewData.rating,
        UserId: reviewData.UserId,
        ProviderId: reviewData.ProviderId
      })
      return newReview
    } catch (error) {
      return 'Error al Crear la Review'
    }
  }
}
export default reviewsServices
