import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Config } from '../config/config.js'

const noData = (req, res, next) => {
  res.json({
    data: null,
    error: null,
  })
}

const hashFunc = async ({ id }) => {
  const salt = await bcrypt.genSalt(10)
  const hashedValue = await bcrypt.hash(id, salt)
  return hashedValue
}

const jwtSignIn = async ({ id }) => {
  const hash = await hashFunc({ id })
  const token = jwt.sign({ userId: hash }, Config.jwtSecret, {
    expiresIn: '365d',
  })
  return token
}

export default {
  hashFunc,
  jwtSignIn,
  noData,
}
