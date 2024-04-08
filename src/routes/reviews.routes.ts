import ReviewsControllers from "../controllers/reviews.controllers";
import express from 'express'
const router = express.Router()

router.get('/', ReviewsControllers.getAllReviews)
router.get('/getByUserId/:id', ReviewsControllers.getByUserId)
router.get('/getByProviderId/:id', ReviewsControllers.getByProviderId)
router.post('/createReview', ReviewsControllers.createReview)

export default router