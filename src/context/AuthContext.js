import { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/config";

import { fetchSignInMethodsForEmail } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user?.uid) {
        const { uid, displayName, photoURL, email } = user;
        setUser({ uid, displayName, photoURL, email });
        console.log("authcontext");

        navigate("/");
        return;
      }
      setUser({});
      navigate("/login");
    });
    return () => {
      unsub();
    };
  }, [auth]);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
