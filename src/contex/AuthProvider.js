import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
export const AuthContext= createContext();
 const AuthProvider = ({children}) => {
     const allProviders= useFirebase();
    return (
        <AuthContext.Provider value={allProviders}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;