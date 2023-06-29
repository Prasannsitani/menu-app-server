import User from '../models/user-model.js'
import Helper from '../utils/helper-functions.js'

export const login = async (req, res, next) => {
  try {
    User.findOne({ mobile_number: req.body.mobile_number }).then(async user => {
      if (user) {
        const token = await Helper.jwtSignIn({ id: user.id })
        res.status(200).json({
          message: 'Login successful',
          jwt: token,
        })
      } else {
        const user = new User(req.body)
        user
          .save()
          .then(async newUser => {
            const token = await Helper.jwtSignIn({ id: newUser.id })
            res.status(201).json({ message: 'Login successful', jwt: token })
          })
          .catch(error => {
            res.status(500).json({ error: error._message })
          })
      }
    })
  } catch (error) {
    res.status(500).json({ error: error._message })
  }
}
