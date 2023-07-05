import express from 'express'
import './config/database.js'
import authRoutes from './routes/auth-routes.js'
import foodRoutes from './routes/food-routes.js'
import authMiddleware from './middlewares/auth-middleware.js'
import admin from 'firebase-admin'
import ServiceAccountKey from './services-account-key.json'

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())

// Firebase Configuration
admin.initializeApp({
  credential: admin.credential.cert(ServiceAccountKey),
})

// App Routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/food', authMiddleware, foodRoutes)

app.listen(PORT, (req, res) => {
  console.log('Server started on port ' + PORT)
})
