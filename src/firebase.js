// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB6BhkQelUHC9Wtm0SltO_uhqeezpNpyyA",
  authDomain: "dsc-nsec-devprofile.firebaseapp.com",
  projectId: "dsc-nsec-devprofile",
  storageBucket: "dsc-nsec-devprofile.appspot.com",
  messagingSenderId: "1054011618318",
  appId: "1:1054011618318:web:85eb13bdfd04bbd60e385f",
  measurementId: "G-B1BGS50N59"
};

// Initialize Firebase
initializeApp(firebaseConfig)
const auth = getAuth()

export { auth }