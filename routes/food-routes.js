import express from 'express'
import {
  postFoodItem,
  getFoodItemById,
  getFoodItemsByCategory,
} from '../controllers/food-controller.js'
import Helper from '../utils/helper-functions.js'

const router = express.Router()

router.get('/', Helper.noData)
router.post('/', postFoodItem)
router.get('/items/:id', getFoodItemById)
router.get('/items', getFoodItemsByCategory)

export default router
