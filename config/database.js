import mongoose from 'mongoose'

const DB_URL =
  'mongodb+srv://admin:admin@ar-menu-app-prod.kavmp2c.mongodb.net/restaurant?retryWrites=true&w=majority'

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch(error => {
    console.error('connection error : ', error)
    process.exit(0)
  })
