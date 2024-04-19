import { ReviewData } from '../interfaces/review.interface'
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
  createReview: async (reviewData: ReviewData) => {
    try {
      if (
        !reviewData.comment ||
        !reviewData.rating ||
        !reviewData.UserId ||
        !reviewData.ProviderId
      ) {
        throw new Error('Missing Data')
      }
      const newReview = await Reviews.create({
        comment: reviewData.comment,
        rating: reviewData.rating,
        UserId: reviewData.UserId,
        ProviderId: reviewData.ProviderId,
      })
      return newReview
    } catch (error) {
      return 'Error al Crear la Review'
    }
  },
  updateReview: async (id: string, newData: ReviewData) => {
    try {
      const reviewToUpdate = await Reviews.findByPk(id)
      if (!reviewToUpdate) {
        throw new Error('Id not found in database' as string)
      }
      const updatedReview = await reviewToUpdate.update(newData)
      return updatedReview
    } catch (error) {
      throw new Error(error as string)
    }
  },
}
export default reviewsServices
