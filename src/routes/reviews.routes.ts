import ReviewsControllers from "../controllers/reviews.controllers";
import express from 'express'
const router = express.Router()

router.get('/', ReviewsControllers.getALlReviews)
router.get('/:id', ReviewsControllers.getByUserId)

export default router