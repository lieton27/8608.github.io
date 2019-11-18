import firebase, { database } from 'firebase/app'
import 'firebase/database'

export const db = firebase
  .initializeApp({ databaseURL: 'https://vueandfirebase-8a76b.firebaseio.com/' })
  .database()

export const dessertsRef = db.ref('desserts')
export const minumanRef = db.ref('minuman')
