import express from 'express'
import {
  getFoodItemById,
  postFoodItem,
} from '../controllers/food-controller.js'

const router = express.Router()

router.get('/')
router.post('/', postFoodItem)
router.get('/:id', getFoodItemById)

export default router
