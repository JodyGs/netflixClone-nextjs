// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA6E_v7wjvM29CVcRRUZcwZAecYAIkGphw',
  authDomain: 'netflix-clone-512a9.firebaseapp.com',
  projectId: 'netflix-clone-512a9',
  storageBucket: 'netflix-clone-512a9.appspot.com',
  messagingSenderId: '990267248785',
  appId: '1:990267248785:web:135a8a49de3aa1ec4caf30',
}
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
