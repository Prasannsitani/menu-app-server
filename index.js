import express from 'express'
import mongoose from 'mongoose'
import userModel from './models/user-model.js'

const app = express()
const PORT = process.env.PORT || 8080

const DB_URL =
  'mongodb+srv://admin:admin@ar-menu-app-prod.kavmp2c.mongodb.net/restaurant?retryWrites=true&w=majority'

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connected!!')
  })
  .catch(error => {
    console.log('connection error : ', error)
  })

app.get('/', async (req, res) => {
  try {
    const data = await userModel.find()
    console.log('data found : ', data)
    // (error, user) => {
    //     if (error) {
    //       console.log('db error : ' + JSON.stringify(error))
    //     }
    //     res.json(user)
    //   }
  } catch (error) {
    console.log('catch error : ' + error)
  }

  //   res.json({
  //     error: null,
  //     data: null,
  //   })
})

app.listen(PORT, (req, res) => {
  console.log('Server started on port ' + PORT)
})
