// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJpY4ZR4kyD_MY28w9WHSdPnrUR_o68Uc",
  authDomain: "y-spot-login.firebaseapp.com",
  projectId: "y-spot-login",
  storageBucket: "y-spot-login.appspot.com",
  messagingSenderId: "30897930850",
  appId: "1:30897930850:web:fc0e6db3d0c2a1aabc873b",
  measurementId: "G-67SX5WCNN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
auth.languageCode = 'en';

document.addEventListener("DOMContentLoaded", function() {
  const googleLogin = document.getElementById("google-login-btn");
  googleLogin.addEventListener("click", function() {
    // alert("hi");
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // Redirect to a new page
        window.location.href = "looged.html"; // Replace with your redirect URL
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error during sign in:", errorCode, errorMessage);
      });
  });
});
