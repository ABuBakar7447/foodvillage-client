import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";


//createContext should be empty inside first bracket
export const AuthContext = createContext()
const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); //loading state should be true

    const googleProvider = new GoogleAuthProvider();


    const createuser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }

    const logout = () =>{
        // setLoading(true); //logout donot need to setloading state
        return signOut(auth);
    }

    const updateUserProfile = (name, photourl) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photourl
          })
          
    }

    useEffect (()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            // setLoading(false)
            if(currentUser){
                axios.post('https://foodvillage-server.vercel.app/jwt',{email:currentUser.email})
                .then(data =>{
                    localStorage.setItem('access-token', data.data.token)
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('access-token');
                setLoading(false);
            }
            

        });
        return()=>{
            return unsubscribe();
        }
    },[])

    const authInfo ={
        user,
        loading,
        createuser,
        googleSignIn,
        signIn,
        logout,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;