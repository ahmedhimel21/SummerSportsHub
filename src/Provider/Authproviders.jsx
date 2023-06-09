import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
// social login
const googleAuthProvider = new GoogleAuthProvider();

const Authproviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // create user or signUp
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // social login popup
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleAuthProvider);
  };
  // signIn
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // signOut
  const logOut = () => {
    return signOut(auth);
  };
  // observe auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // get and set token
      if(currentUser){
        axios.post('http://localhost:5000/jwt', {
          email: currentUser.email
        }).then(data =>{
          console.log(data.data.token)
          localStorage.setItem('access-token',data.data.token)
          setLoading(false);
        })
      } else{
        localStorage.removeItem('access-token')
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    signInWithGoogle,
    signIn,
    user,
    logOut,
    loading,
    auth,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default Authproviders;
