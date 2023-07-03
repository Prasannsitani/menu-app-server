import mongoose from 'mongoose'
import { CATEGORY } from '../constants/category.js'

export const FoodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    rating: {
      iconUrl: String,
      value: Number,
      displayText: String,
      suggestion: {
        value: Number,
        displayText: String,
      },
    },
    tags: Array,
    favourites: {
      isFavourite: {
        type: Boolean,
        value: true,
      },
      iconUrl: String,
    },
    category: {
      type: String,
      enum: Object.values(CATEGORY),
      required: true,
    },
    isRecommended: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true },
)

export default mongoose.model('Food', FoodSchema)
