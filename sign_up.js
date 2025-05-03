// Import Firebase modules from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyOgBBXIo5C-LtsbrdxZepRZoWeF7r17M",
  authDomain: "majority-report-33739.firebaseapp.com",
  projectId: "majority-report-33739",
  storageBucket: "majority-report-33739.firebasestorage.app",
  messagingSenderId: "96713972972",
  appId: "1:96713972972:web:ecdba62f0a3c29d01259c9",
  measurementId: "G-Z379S3VVY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Make function accessible to global scope
window.handleSignup = async function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert("User created: " + userCredential.user.email);
  } catch (error) {
    alert("Error: " + error.message);
  }
};

//IMPLEMENTATION EXAMPLE ON HTML

/*
<!DOCTYPE html>
<html>
<head>
  <title>Firebase Signup</title>
</head>
<body>
  <h1>Sign Up</h1>
  <form onsubmit="handleSignup(event)">
    <input type="email" id="email" placeholder="Email" required><br><br>
    <input type="password" id="password" placeholder="Password" required><br><br>
    <button type="submit">Sign Up</button>
  </form>

  <!-- Import script -->
  <script type="module" src="script.js"></script>
</body>
</html>
*/