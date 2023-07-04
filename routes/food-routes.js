import express from 'express'
import {
  postFoodItem,
  getHomeScreen,
  getFoodItemById,
  getFoodItemsByCategory,
  getViewAllScreen,
} from '../controllers/food-controller.js'

const router = express.Router()

// Normal Routes
router.get('/', getFoodItemsByCategory)
router.post('/', postFoodItem)
router.get('/home', getHomeScreen)
router.get('/view-all', getViewAllScreen)

// Path Params Routes
router.get('/:id', getFoodItemById)

export default router
