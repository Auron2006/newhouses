// Import the Firebase app from firebase-config.js
import { getFirebaseApp } from './firebase-config.js';

// Get the initialized Firebase app
const firebaseApp = getFirebaseApp();

// Now, you can use firebaseApp to access Firebase in other parts of the same file
console.log("Firebase app initialized:", firebaseApp);

// Add your application logic below