
import { onAuthStateChanged, signOut,  updateProfile, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import React from 'react';
import { auth } from "../Firebase/Firebase.config";




const AuthProvider = ({children}) => {
     const [user , setUser] = useState(null)
     const [loading,setLoading] = useState(true)

   
     const Register = (email,password) =>{
          setLoading(true)
          return createUserWithEmailAndPassword(auth,email,password)
     }
     const SignIn = (email,password)=>{
          setLoading(true)
          return signInWithEmailAndPassword(auth,email,password)
     }
   
   const logOut = ()=>{
     setLoading(true)
     return signOut(auth)
   }
     const updateUserProfile = (name, photoURL)=>{
          updateProfile(auth.currentUser,{
               displayName: name,photoURL: photoURL
          })
     }

     useEffect(()=>{
          const unSubscribe = onAuthStateChanged(auth, currentUser =>{
               setUser(currentUser)              
               setLoading(false)
          })
          return ()=>{
               return unSubscribe();
          }
     })
     const authInfo = {
        user,
        loading,
       
        updateProfile,
        logOut,
        SignIn,
        Register,
        updateUserProfile 
        
     }
     return (
          <div>
               <AuthContext.Provider value={authInfo} >
                    {children}
               </AuthContext.Provider>
          </div>
     );
};

export default AuthProvider;