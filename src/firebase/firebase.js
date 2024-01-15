import 'firebase/auth';

import * as firebase from 'firebase/app';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAIAs3hkrTa0HSLkl0Ze9FekVfcHYvdkPQ',
  authDomain: 'movie-recommendation-auth.firebaseapp.com',
  projectId: 'movie-recommendation-auth',
  storageBucket: 'movie-recommendation-auth.appspot.com',
  messagingSenderId: '535058655146',
  appId: '1:535058655146:web:23298bbd533474df986dd3',
});

export const auth = app.auth();
export default app;
