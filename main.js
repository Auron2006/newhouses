// config/firebase.js

const getFirebaseConfig = () => {
    return {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
    };
  };
  
  export default getFirebaseConfig;
  
  // In your main application file (e.g., app.js or index.js)
  import { initializeApp } from 'firebase/app';
  import getFirebaseConfig from './config/firebase';
  
  const firebaseConfig = getFirebaseConfig();
  const app = initializeApp(firebaseConfig);
  
  // Use the Firebase app instance as needed