import ReviewsControllers from '../controllers/reviews.controllers'
import express from 'express'
import {
  createReviewValidator,
  updateReviewVAlidator,
  uuidV4Validator,
} from '../middlewares'

const router = express.Router()

router.get('/', ReviewsControllers.getAllReviews)
router.post('/', [createReviewValidator], ReviewsControllers.createReview)
router.patch('/:id', [updateReviewVAlidator], ReviewsControllers.updateReview)
router.get('/UserId/:id', [uuidV4Validator('id')], ReviewsControllers.getByUserId)
router.get('/ProviderId/:id', [uuidV4Validator('id')], ReviewsControllers.getByProviderId)

export default router
