import express from 'express'

const router = express.Router()

router.get('/register', (req, res, next) => {
  console.log({ role: req.user.role })
})

export default router
