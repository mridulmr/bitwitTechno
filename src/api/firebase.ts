import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC9Pl-xKoSmcVzDWMps--DD84QMmj8yDmg",
  authDomain: "bitwit-techno-site.firebaseapp.com",
  projectId: "bitwit-techno-site",
  storageBucket: "bitwit-techno-site.appspot.com",
  messagingSenderId: "73167890312",
  appId: "1:73167890312:web:426675a4fd424340fefc3d",
  measurementId: "G-LYQVS310GP"
};

// import.meta.env.FIREBASE_PROJECT_ID
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)