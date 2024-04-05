import reviewsServices from '../services/reviews.services'
import { Request, Response } from 'express'

const ReviewsControllers = {
  getALlReviews: async (req: Request, res: Response) => {
    try {
      const reviews = await reviewsServices.getAllReviews()
      if (reviews.length > 0) res.status(200).send(reviews)
      else res.status(400).send(reviews)
    } catch (error) {
      res.status(500).send('Internal Server Error')
    }
  },
  getByUserId: async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      const reviews = await reviewsServices.getByUserId(id)
      if (reviews) res.status(200).send(reviews)
      else res.status(400).send(reviews)
    } catch (error) {}
  },
}
export default ReviewsControllers