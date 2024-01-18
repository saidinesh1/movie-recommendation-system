import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup
  
} from 'firebase/auth';

import { auth,provider } from '../firebase/firebase';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const googleSignIn=()=>{
    return signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = provider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = provider.credentialFromError(error);
    // ...
  });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  const value = { currentUser, signUp, logIn, logOut,googleSignIn };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
