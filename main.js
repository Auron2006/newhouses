// Load environment variables for local development (this will work in Node.js locally)
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// Access the Firebase keys from environment variables
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// For debugging: log the config to the console (do NOT do this in production!)
console.log("Firebase Config:", firebaseConfig);

// Example of using the Firebase config (placeholder, not connecting to Firebase)
document.write(`<p>Firebase API Key: ${firebaseConfig.apiKey}</p>`);