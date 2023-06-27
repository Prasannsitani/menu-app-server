import express from 'express'
import './config/database.js'
// import userModel from './models/user-model.js'
import userRoutes from './routes/user-routes.js'

const app = express()
const PORT = process.env.PORT || 8080

// app.get('/', async (req, res) => {
//   try {
//     const data = await userModel.find()
//     console.log('data found : ', data)
//   } catch (error) {
//     console.log('catch error : ' + error)
//   }
// })

app.use('/api/users', userRoutes)

app.listen(PORT, (req, res) => {
  console.log('Server started on port ' + PORT)
})
