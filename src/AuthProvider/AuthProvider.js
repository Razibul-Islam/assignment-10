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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const googleProviderLogin = (googleProvider) => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const emailVerification = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const profileUpdate = (profile) => {
    setLoading(true);
    return updatePassword(auth.currentUser, profile);
  };
  
  const gitHubUpdate = (githubProvider) => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  }

  const logout = () => {
    setLoading(true)
    return signOut(auth);
  }

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     setLoading(false)
  //     console.log(currentUser);
  //     console.log(user);
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // })

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unsubscribe()
    }
  },[])

  

  const AuthInfo = {
    user,
    loading,
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
