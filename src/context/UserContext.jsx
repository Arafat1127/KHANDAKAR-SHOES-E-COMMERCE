import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.init';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

//const auth = getAuth(app)
export const AuthContext = createContext()

const UserContext = ({ children }) => {
    const [user, setUsers] = useState({});
    //create user/sign up

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    //verify email
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    };
    //google log in or sign up
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }




    //update profile name
    const updateUser = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        });
    }

    //user sign in or log in
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    //
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUsers(currentUser);
            console.log("current user :", currentUser);

        })
        return () => unSubscribe();
    }, []);
    //log out or sign out

    const logOut = () => {
        return signOut(auth)
            .then(() => {
                //sign out successfully
            })
            .catch((error) => {
                //error happened
            });
    }


    const authInfo = { createUser, signIn, logOut, user, updateUser, googleSignIn, verifyEmail };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default UserContext;