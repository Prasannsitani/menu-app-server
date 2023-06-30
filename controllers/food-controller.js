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
      res.status(404).json({ error: 'No Data Found!!' })
    }
  } catch (error) {
    res.status(500).json({ error: error._message })
  }
}

export const postFoodItem = async (req, res, next) => {
  try {
    const foodItem = new FoodItem(req.body)
    await foodItem.save()
    res.status(201).json({ message: 'Item saved successfully!!' })
  } catch (error) {
    res.status(500).json({ error: error._message })
  }
}
