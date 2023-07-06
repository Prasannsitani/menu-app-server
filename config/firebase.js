import admin from 'firebase-admin'
import { getAuth } from 'firebase-admin/auth'
import ServiceAccountKey from '../service-account-key.json' assert { type: 'json' }

// Firebase Configuration
const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(ServiceAccountKey),
})

export const firebaseAuth = getAuth(firebaseApp)
