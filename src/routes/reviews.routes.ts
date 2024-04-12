import ReviewsControllers from '../controllers/reviews.controllers'
import express from 'express'
const router = express.Router()

router.get('/', ReviewsControllers.getAllReviews)
router.post('/', ReviewsControllers.createReview)
router.patch('/:id', ReviewsControllers.updateReview)
router.get('/UserId/:id', ReviewsControllers.getByUserId)
router.get('/ProviderId/:id', ReviewsControllers.getByProviderId)

export default router
