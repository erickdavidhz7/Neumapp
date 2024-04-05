import ReviewsControllers from "../controllers/reviews.controllers";
import express from 'express'
const router = express.Router()

router.get('/', ReviewsControllers.getALlReviews)
router.get('/getByUserId/:id', ReviewsControllers.getByUserId)
router.get('/getByProviderId/:id', ReviewsControllers.getByProviderId)

export default router