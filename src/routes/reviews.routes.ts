import ReviewsControllers from '../controllers/reviews.controllers'
import express from 'express'
const router = express.Router()

router.get('/', ReviewsControllers.getAllReviews)
router.get('/UserId/:id', ReviewsControllers.getByUserId)
router.get('/ProviderId/:id', ReviewsControllers.getByProviderId)
router.post('/createReview', ReviewsControllers.createReview)
router.patch('/updateReview/:id', ReviewsControllers.updateReview)

export default router
