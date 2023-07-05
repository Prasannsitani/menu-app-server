import mongoose from 'mongoose'
import { FoodSchema } from './food-model.js'
import { SECTION_TYPE } from '../constants/section-type.js'
import { CATEGORY } from '../constants/category.js'

const SectionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: Object.values(SECTION_TYPE),
    required: true,
  },
  title: String,
  data: FoodSchema,
  primaryCTA: {
    displayText: String,
    iconUrl: String,
    iconAlignment: {
      type: String,
      enum: ['LEFT', 'RIGHT'],
    },
  },
})

const TabSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: Object.values(CATEGORY),
    required: true,
  },
  imageUrl: String,
  displayText: {
    type: String,
    required: true,
  },
  sections: [SectionSchema],
})

const ConfigSchema = new mongoose.Schema(
  {
    home: {
      title: String,
      tabs: [TabSchema],
    },
  },
  { timestamps: true },
)

export default mongoose.model('Config', ConfigSchema)
