import React, { createContext } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(app);
export const AuthContext = createContext();
// console.log(AuthContext);

const UserContext = ({ children }) => {

    //create user / sign up
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    };

    //user sign in

    const SignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);

    }

    const authInfo = { createUser, SignIn }

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

export default UserContext;