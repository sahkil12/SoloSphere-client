import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider()

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logoutUser = async () => {
    setLoading(true)
    const { data } = axios(`${import.meta.env.VITE_API_URL}/logout`, { withCredentials: true })
    return signOut(auth);
  }
  const googleUser = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  const updateUser = (updatedInfo) => {
    return updateProfile(auth.currentUser, updatedInfo)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      if (currentUser?.email) {
        axios.post(`${import.meta.env.VITE_API_URL}/jwt`, { email: currentUser.email }, { withCredentials: true })
          .then(result => {
            // console.log(result.data)
          })
      }
      setLoading(false);
    })
    return () => unsubscribe()
  }, [])

  const userInfo = {
    loading,
    registerUser,
    loginUser,
    user,
    logoutUser,
    googleUser,
    updateUser,
    setUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;