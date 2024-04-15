import reviewsServices from '../services/reviews.services'
import { Request, Response } from 'express'

const ReviewsControllers = {
  getAllReviews: async (req: Request, res: Response) => {
    try {
      const reviews = await reviewsServices.getAllReviews()
      if (reviews.length > 0) res.status(200).send(reviews)
      else res.status(400).send('No existen Reviews en la Base de Datos')
    } catch (error) {
      res.status(500).json({ ok: false, message: 'Internal server error' })
    }
  },
  getByUserId: async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      const reviews = await reviewsServices.getByUserId(id)
      if (reviews) res.status(200).send(reviews)
      else res.status(400).send(reviews)
    } catch (error) {
      res.status(500).json({ ok: false, message: 'Internal server error' })
    }
  },
  getByProviderId: async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      const reviews = await reviewsServices.getByProviderId(id)
      if (reviews) res.status(201).json(reviews)
      else res.status(400).send(reviews)
    } catch (error) {
      res.status(500).json({ ok: false, message: 'Internal server error' })
    }
  },
  createReview: async (req: Request, res: Response) => {
    const reviewData = req.body
    try {
      const newReview = await reviewsServices.createReview(reviewData)
      res.status(201).json(newReview)
    } catch (error) {
      res.status(500).json({ ok: false, message: 'Internal server error' })
    }
  },
  updateReview: async (req: Request, res: Response) => {
    const { id } = req.params
    const reviewData = req.body
    try {
      const updatedReview = await reviewsServices.updateReview(id, reviewData)
      res.status(200).json(updatedReview)
    } catch (err) {
      res.status(500).json({ ok: false, message: 'Internal server error' })
    }
  },
}
export default ReviewsControllers
