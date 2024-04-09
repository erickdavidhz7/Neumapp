import reviewsServices from '../services/reviews.services'
import { Request, Response } from 'express'

const ReviewsControllers = {
  getAllReviews: async (req: Request, res: Response) => {
    try {
      const reviews = await reviewsServices.getAllReviews()
      if (reviews.length > 0) res.status(200).send(reviews)
      else res.status(400).send('No existen Reviews en la Base de Datos')
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
    } catch (error) {
      res.status(500).send('Internal Server Error')
    }
  },
  getByProviderId: async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      const reviews = await reviewsServices.getByProviderId(id)
      if (reviews) res.status(201).json(reviews)
      else res.status(400).send(reviews)
    } catch (error) {
      res.status(500).send('Internal Server Error')
    }
  },
  createReview: async (req: Request, res: Response) => {
    const reviewData = req.body
    try {
      const newReview = await reviewsServices.createReview(reviewData)
      res.status(201).json(newReview)
    } catch (error) {
      res.status(500).send('Internal Server Error')
    }
  },
}
export default ReviewsControllers
