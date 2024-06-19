// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWafRTBEyAqso-ePNutQAH50Fb-miXw_U",
  authDomain: "deeplom-5ee3c.firebaseapp.com",
  projectId: "deeplom-5ee3c",
  storageBucket: "deeplom-5ee3c.appspot.com",
  messagingSenderId: "814299477320",
  appId: "1:814299477320:web:5398fd1450a3e68b5c2f7d",
  measurementId: "G-KC0SNN6P7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
