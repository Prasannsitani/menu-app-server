import express from 'express'
import {
  getFoodItemById,
  postFoodItem,
} from '../controllers/food-controller.js'
import Helper from '../utils/helper-functions.js'

const router = express.Router()

router.get('/', Helper.noData)
router.post('/', postFoodItem)
router.get('/:id', getFoodItemById)

export default router
