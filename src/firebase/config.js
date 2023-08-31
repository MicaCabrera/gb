// Import the functions you need from the SDKs you need
// import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBMNUJgjtjivp2Q2SS3S-UgpFVb_v9yLx0',
  authDomain: 'proyecto-gon-11c4e.firebaseapp.com',
  projectId: 'proyecto-gon-11c4e',
  storageBucket: 'proyecto-gon-11c4e.appspot.com',
  messagingSenderId: '474432111010',
  appId: '1:474432111010:web:49c7c678a6fd1c2112b2fb',
  measurementId: 'G-5EV4RDQ2E8',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
// const analytics = getAnalytics(app)
