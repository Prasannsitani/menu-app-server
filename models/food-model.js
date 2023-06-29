import mongoose from 'mongoose'
import { CATEGORY } from '../constants/category.js'

const FoodSchema = new mongoose.Schema(
  {
    name: String,
    iconUrl: String,
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
  },
  { timestamps: true },
)

export default mongoose.model('Food', FoodSchema)
