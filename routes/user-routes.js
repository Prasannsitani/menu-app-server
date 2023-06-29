import express from 'express'
import User from '../models/user-model.js'

const router = express.Router()

router.get('/login', async (req, res, next) => {
  try {
    User.findOne({ mobile_number: req.body.mobile_number }).then(user => {
      if (user) {
        res.status(200).json({
          message: 'Login successful',
        })
      } else {
        const user = new User(req.body)
        user
          .save()
          .then(() => {
            res.status(201).json({ message: 'Login successful' })
          })
          .catch(error => {
            res.status(500).json({ error: error._message })
          })
      }
    })
  } catch (error) {
    res.status(500).json({ error: error._message })
  }
})

export default router
