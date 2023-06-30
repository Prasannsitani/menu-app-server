import FoodItem from '../models/food-model.js'

export const getFoodItemById = async (req, res, next) => {
  try {
    const foodItem = await FoodItem.findById(req.params.id)
    if (foodItem) {
      res.status(200).json({
        data: foodItem,
        error: null,
      })
    } else {
      res
        .status(404)
        .json({ error: 'Not Found', userMessage: 'No Data Found!!' })
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: error._message, userMessage: 'Something went wrong' })
  }
}

export const getFoodItemsByCategory = async (req, res, next) => {
  try {
    const foodItems = await FoodItem.find({ category: req.query.category })
    if (foodItems && foodItems.length > 0) {
      res.status(200).json({
        data: foodItems,
        error: null,
      })
    } else {
      res
        .status(404)
        .json({ error: 'Not Found', userMessage: 'No Data Found!!' })
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: error._message, userMessage: 'Something went wrong' })
  }
}

export const postFoodItem = async (req, res, next) => {
  try {
    const foodItem = new FoodItem(req.body)
    await foodItem.save()
    res.status(201).json({ message: 'Item saved successfully!!' })
  } catch (error) {
    res
      .status(500)
      .json({ error: error._message, userMessage: 'Something went wrong' })
  }
}

export const getHomeScreen = async (req, res, next) => {
  try {
  } catch (error) {
    res
      .status(500)
      .json({ error: error._message, userMessage: 'Something went wrong' })
  }
}
