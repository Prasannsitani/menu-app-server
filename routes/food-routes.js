import express from 'express'
import {
  postFoodItem,
  getHomeScreen,
  getFoodItemById,
  getFoodItemsByCategory,
} from '../controllers/food-controller.js'

const router = express.Router()

router.post('/', postFoodItem)
router.get('/home', getHomeScreen)
router.get('/:id', getFoodItemById)
router.get('/', getFoodItemsByCategory)

export default router
