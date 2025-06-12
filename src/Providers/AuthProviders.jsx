import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../../firebase.init';


export const AuthContext = createContext()

const AuthProviders = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // create user with name and password
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login

    const loginUser = (email, password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }





    
    const authInfo = {
        loading,
        user,
        setUser,
        createUser,
        loginUser,


    }

    return (
        <AuthContext.Provider value={authInfo}> 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;