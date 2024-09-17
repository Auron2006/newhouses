// Load environment variables from .env if running locally (Node.js environment)
if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv');
    dotenv.config();
}

// Use process.env for local development, otherwise use Vercel's environment
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY || __VERCEL_ENV__FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || __VERCEL_ENV__FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID || __VERCEL_ENV__FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || __VERCEL_ENV__FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || __VERCEL_ENV__FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID || __VERCEL_ENV__FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID || __VERCEL_ENV__FIREBASE_MEASUREMENT_ID
};

console.log("Firebase Config:", firebaseConfig);