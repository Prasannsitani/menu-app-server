import mongoose from 'mongoose'
import { FoodSchema } from './food-model.js'
import { SECTION_TYPE } from '../constants/section-type.js'

const SectionSchema = new mongoose.Schema({
  id: String,
  type: {
    type: String,
    enum: Object.values(SECTION_TYPE),
    required: true,
  },
  title: String,
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
  id: String,
  displayText: String,
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
