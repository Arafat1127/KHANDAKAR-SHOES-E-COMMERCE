import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signInWithPopup, signOut, updateProfile
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';

export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext()

const UserContext = ({ children }) => {
    const [user, setUsers] = useState({});
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    const updateUser = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        });
    }


    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUsers(currentUser);
            // console.log("current user :", currentUser);

        })
        return () => unSubscribe();
    }, []);


    const logOut = () => {
        return signOut(auth)
            .then(() => {

            })
            .catch((error) => {
            });
    }


    const authInfo = {
        createUser,
        signIn,
        logOut,
        user,
        updateUser,
        googleSignIn,
        verifyEmail
    };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default UserContext;