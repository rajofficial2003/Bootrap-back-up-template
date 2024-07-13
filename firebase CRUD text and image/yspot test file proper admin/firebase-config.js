// firebase-config.js
// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkTgEb7H_wNIgVhWwm-l-IzrHXDSe3ni4",
    authDomain: "testcrud-103a3.firebaseapp.com",
    databaseURL: "https://testcrud-103a3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "testcrud-103a3",
    storageBucket: "testcrud-103a3.appspot.com",
    messagingSenderId: "387302339276",
    appId: "1:387302339276:web:e6c88525a1d80f9d154869",
    measurementId: "G-ZR3EB3CD3Z"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
