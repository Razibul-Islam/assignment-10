import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config"


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    
    const user = { display_name: "Razibul" };

    const googleProviderLogin = (googleProvider) => {
        return signInWithPopup(auth, googleProvider);
  };
  
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

    const AuthInfo = { user, googleProviderLogin, createUser };

    return (
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;