import Food from '../models/food-model.js'

export const getFoodItemById = (req, res, next) => {
  res.json({
    id: req.params.id,
    data: 'Controller called!!',
  })
}

export const postFoodItem = async (req, res, next) => {
  try {
  } catch (err) {}
}
