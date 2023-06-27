import express from 'express'
import authMiddleware from '../middlewares/auth-middleware.js'
import userModel from '../models/user-model.js'

const router = express.Router()

router.get('/register', async (req, res, next) => {
  try {
    const user = new userModel(req.body)
    await user.save()
    res.status(201).json({ message: 'User registered successfully' })
  } catch (error) {
    res.status(500).json({ error: error._message })
  }
})

export default router
