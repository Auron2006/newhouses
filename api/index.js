const express = require('express');
const serverless = require('serverless-http');
const dotenv = require('dotenv');
const admin = require('firebase-admin');

// Load environment variables
dotenv.config();

// Initialize Firebase Admin SDK using the service account
const serviceAccount = {
  "type": "service_account",
  "project_id": "theideahunt-74cd8",
  "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
  "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  "client_email": process.env.FIREBASE_CLIENT_EMAIL,
  "client_id": process.env.FIREBASE_CLIENT_ID,
  "auth_uri": process.env.FIREBASE_AUTH_URI,
  "token_uri": process.env.FIREBASE_TOKEN_URI,
  "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  "client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://theideahunt-74cd8.firebaseio.com"
});

const app = express();
app.use(express.json());

// Route to fetch house data from Firestore
app.get('/api/houses', async (req, res) => {
  try {
    const db = admin.firestore();
    const housesCollection = await db.collection('houses').get();
    const houses = housesCollection.docs.map(doc => doc.data());

    res.json(houses); // Respond with the house data
  } catch (error) {
    console.error('Error fetching house data:', error);
    res.status(500).json({ error: 'Failed to fetch house data' });
  }
});

module.exports = app;
module.exports.handler = serverless(app);