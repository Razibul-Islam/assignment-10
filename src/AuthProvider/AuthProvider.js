import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const  [users, setUser]  = useState(null);

  const googleProviderLogin = (googleProvider) => {
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const emailVerification = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const profileUpdate = (profile) => {
    return updatePassword(auth.currentUser, profile);
  };
  
  const gitHubUpdate = (githubProvider) => {
    return signInWithPopup(auth, githubProvider);
  }

  const logout = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  })

  const AuthInfo = {
    users,
    googleProviderLogin,
    createUser,
    login,
    emailVerification,
    profileUpdate,
    logout,
    gitHubUpdate,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
