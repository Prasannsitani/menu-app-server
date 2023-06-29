import dotenv from 'dotenv'

dotenv.config()
export const Config = {
  jwtSecret: process.env.JWT_SECRET,
  dbUrl: process.env.DB_URL,
}
