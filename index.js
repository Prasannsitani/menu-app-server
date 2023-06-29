import express from 'express'
import './config/database.js'
import userRoutes from './routes/user-routes.js'

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use('/api/users', userRoutes)

app.listen(PORT, (req, res) => {
  console.log('Server started on port ' + PORT)
})
