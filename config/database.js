import mongoose from 'mongoose'
import { Config } from './config.js'

mongoose
  .connect(Config.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch(error => {
    console.error('connection error : ', error)
    process.exit(0)
  })
