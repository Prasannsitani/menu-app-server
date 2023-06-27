import jwt from 'jsonwebtoken'
import { Config } from '../config/config.js'

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).json({ error: 'Authorization token missing' })
  }

  try {
    const decodedToken = jwt.verify(token, Config.jwtSecret)
    req.userId = decodedToken.userId
    next()
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' })
  }
}

export default authMiddleware
