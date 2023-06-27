import mongoose from 'mongoose'
import { ROLE } from '../constants/role.js'

const UserSchema = new mongoose.Schema(
  {
    mobile_number: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return /^(\+?91|0)?[6789]\d{9}$/.test(value)
        },
        message: 'Phone Number is invalid!!',
      },
    },
    password: { type: String, required: false },
    role: { type: String, enum: Object.values(ROLE), required: true },
  },
  { timestamps: true },
)

export default mongoose.model('User', UserSchema)
