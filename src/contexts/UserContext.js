import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword
} from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "../firebase/firebase";

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState({ displayName: "Aakash" });

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { user, createUser, signIn };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
