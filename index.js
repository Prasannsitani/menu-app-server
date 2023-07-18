import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import csurf from 'csurf'

import './config/firebase.js'
import './config/database.js'
import authRoutes from './routes/auth-routes.js'
import foodRoutes from './routes/food-routes.js'
import authMiddleware from './middlewares/auth-middleware.js'

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

// Configure session
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: true, // Ensures cookies are only sent over HTTPS
      httpOnly: true, // Prevents client-side access to cookies
      sameSite: 'strict', // Protects against cross-site request forgery (CSRF) attacks
    },
  }),
)

// Use CSRF protection
app.use(csurf())
app.use((err, req, res, next) => {
  if (err.code !== 'EBADCSRFTOKEN') return next(err)

  // Handle CSRF token validation failure
  res.status(403).send('CSRF token validation failed')
})

// Open Endpoint
app.get('/', (req, res) => {
  res.json({
    data: null,
    error: null,
  })
})

// App Routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/food', authMiddleware, foodRoutes)

app.listen(PORT, (req, res) => {
  console.log('Server started on port ' + PORT)
})
