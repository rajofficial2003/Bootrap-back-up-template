// App.js
import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCh-Dq07x2LhQQckEE-QCf7RPKlqs4DV6w",
  authDomain: "fir-login-9c872.firebaseapp.com",
  databaseURL: "https://fir-login-9c872-default-rtdb.firebaseio.com",
  projectId: "fir-login-9c872",
  storageBucket: "fir-login-9c872.appspot.com",
  messagingSenderId: "411249060600",
  appId: "1:411249060600:web:3d5007178a5a446ddb290d",
  measurementId: "G-94BJ0XSHDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);

    try {
      // Firebase Authentication method to create a new user
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage('User created successfully!');
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="container">
      <h2>Create a New User</h2>
      <form onSubmit={handleCreateUser}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Create User</button>
      </form>
      {message && <div className="mt-3 alert alert-info">{message}</div>}
    </div>
  );
}

export default App;
