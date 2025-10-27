import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";
import { AuthContext } from "../Context/AuthContext";

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null); 
    const googleProvider = new  GoogleAuthProvider()

    const registerUser = (email, password) =>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) =>{
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
    }
    const logoutUser =()=>{
      setLoading(true)
      return signOut(auth);
    }
    const googleUser = () =>{
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }
    const updateUser = (updatedInfo)=>{
      return updateProfile(auth.currentUser, updatedInfo)
    }
   
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        setLoading(false);
        console.log(currentUser);
      })
      return ()=> unsubscribe()   
    } ,[])

  const userInfo = {
    loading,
    registerUser,
    loginUser,
    user,
    logoutUser,
    googleUser,
    updateUser
  };
  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;