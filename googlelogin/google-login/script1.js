// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

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

// Add event listener to the Google login button
document.addEventListener("DOMContentLoaded", () => {
  const googleLogin = document.getElementById("google-login-btn");
  googleLogin.addEventListener("click", function() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        window.location.href = "logged.html";
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error('Error during sign-in:', error);
        alert(`Error: ${errorMessage} (Code: ${errorCode})`);
      });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.getElementById("logoutButton");
  logoutButton.addEventListener("click", function() {
    console.log("Signing out...");
    auth.signOut()
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful. Redirecting...");
        window.location.href = "index.html"; // Redirect to logout page
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);
        alert("Error signing out. Please try again.");
      });
  });
});
