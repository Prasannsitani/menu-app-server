import mongoose from 'mongoose'
import { ROLE } from '../constants/role.js'

const UserSchema = new mongoose.Schema(
  {
    mobile: { type: Number, required: true, unique: true },
    password: { type: String, required: false },
    role: { type: String, enum: Object.values(ROLE), required: true },
  },
  { timestamps: true },
)

export default mongoose.model('User', UserSchema)
