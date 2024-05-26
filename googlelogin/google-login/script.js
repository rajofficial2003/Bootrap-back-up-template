  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";
  import { getAuth,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDIORZ40qnyMlULAqwQNmJV3KxiTUqyUa8",
    authDomain: "fir-b1fb0.firebaseapp.com",
    projectId: "fir-b1fb0",
    storageBucket: "fir-b1fb0.appspot.com",
    messagingSenderId: "1077130879034",
    appId: "1:1077130879034:web:be12dc856dcfbc18d8d503",
    measurementId: "G-QGFXC6DE4X"
  };  

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
auth.languageCode = 'en';
  // const analytics = getAnalytics(app);

  const googleLogin = document.getElementById("google-login-btn");
  googleLogin.addEventListener("click", function(){
    // alert("hi");
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    window.location.href ="logged.html";
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  })