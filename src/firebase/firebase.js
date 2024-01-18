import * as firebase from 'firebase/app';

import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});
console.log(process.env.FIREBASE_API_KEY);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export default app;
