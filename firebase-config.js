// Import Firebase modules from the CDN (browser-friendly)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";

// Firebase configuration using environment variables injected into HTML via script tags
const firebaseConfig = {
    apiKey: window.FIREBASE_API_KEY,
    authDomain: window.FIREBASE_AUTH_DOMAIN,
    projectId: window.FIREBASE_PROJECT_ID,
    storageBucket: window.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: window.FIREBASE_MESSAGING_SENDER_ID,
    appId: window.FIREBASE_APP_ID,
    measurementId: window.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase app
let firebaseApp = null;

export function getFirebaseApp() {
    if (!firebaseApp) {
        firebaseApp = initializeApp(firebaseConfig);
    }
    return firebaseApp;
}