import FoodItem from '../models/food-model.js'
import Config from '../models/config-model.js'
import { SECTION_TYPE } from '../constants/section-type.js'

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

// BFF Architecture
export const getHomeScreen = async (req, res, next) => {
  try {
    const configs = await Config.findOne()
    const tabs = configs.home.tabs

    const updatedTabs = await Promise.all(
      tabs.map(async tab => {
        const sections = tab._doc.sections

        const updatedSections = await Promise.all(
          sections.map(async section => {
            if (section.type === SECTION_TYPE.RECOMMENDATION_SECTION) {
              const data = await FoodItem.find({
                category: tab.id,
                isRecommended: true,
              })

              return { ...section._doc, data }
            } else if (section.type === SECTION_TYPE.SEASONAL_SECTION) {
              const data = await FoodItem.find({
                category: tab.id,
                isRecommended: false,
              })

              return { ...section._doc, data }
            }

            return section._doc
          }),
        )

        return { ...tab._doc, sections: updatedSections }
      }),
    )

    res.status(200).json({
      data: {
        tabs: updatedTabs,
      },
      error: null,
    })
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, userMessage: 'Something went wrong' })
  }
}
