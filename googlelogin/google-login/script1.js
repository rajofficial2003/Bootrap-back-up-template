// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp2e7CNo83HwDx_HAVgY_IDh0_KW2Y0HI",
  authDomain: "y-spot-e84ca.firebaseapp.com",
  databaseURL: "https://y-spot-e84ca-default-rtdb.firebaseio.com",
  projectId: "y-spot-e84ca",
  storageBucket: "y-spot-e84ca.appspot.com",
  messagingSenderId: "783996806068",
  appId: "1:783996806068:web:298ca1ddb4dfb7e758c8e1",
  measurementId: "G-TSH2JVYJHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
auth.languageCode = 'en';

document.addEventListener("DOMContentLoaded", () => {
  const googleLogin = document.getElementById("google-login-btn");
  const logoutBtn = document.getElementById("logout-btn");
  const username = document.getElementById("username");
  const profile = document.getElementById("profile");

  googleLogin.addEventListener("click", () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // User successfully signed in
        const user = result.user;
        console.log(user);
        window.location.href = "logged.html";
      })
      .catch((error) => {
        // Handle Errors here
        console.error('Error during sign-in:', error);
        alert(`Error: ${error.message} (Code: ${error.code})`);
      });
  });

  logoutBtn.addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out.');
        // Redirect to the login page
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.error('Error during sign-out:', error);
      });
  });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      username.textContent = user.displayName;
      profile.src = user.photoURL;
      profile.style.display = 'block';
      googleLogin.style.display = 'none';
      logoutBtn.style.display = 'block';
    } else {
      // User is signed out
      username.textContent = '';
      profile.src = '';
      profile.style.display = 'none';
      googleLogin.style.display = 'block';
      logoutBtn.style.display = 'none';
      // Optionally, redirect to login page
      window.location.href = "index.html";
    }
  });
});
