import express from 'express'
import './config/database.js'
import authRoutes from './routes/auth-routes.js'

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use('/api/v1/auth', authRoutes)

app.listen(PORT, (req, res) => {
  console.log('Server started on port ' + PORT)
})
