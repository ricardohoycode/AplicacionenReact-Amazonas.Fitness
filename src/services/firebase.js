// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDwZRDfn8baacE_FmmMueJ2jGiuK-68oY",
  authDomain: "a-fitness---appreact.firebaseapp.com",
  projectId: "a-fitness---appreact",
  storageBucket: "a-fitness---appreact.appspot.com",
  messagingSenderId: "702929929990",
  appId: "1:702929929990:web:7d71ea7b01113cef5f8087",
  measurementId: "G-7QR36YZEGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;