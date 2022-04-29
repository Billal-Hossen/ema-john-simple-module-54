import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";

import initializatonFirebase from "../Firebase/firebase.init";
initializatonFirebase()
const useFirebase= ( )=>{
    const auth = getAuth();
    const [user, setUser] = useState({})
const googleProvider=new GoogleAuthProvider()


    const handleSignInWithGoogle = () =>{
      
      
       return signInWithPopup(auth, googleProvider)
      
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
           setUser(user)
              // ...
            } 
          });
    },[])


    const handleSignOut=()=>{
        signOut(auth).then(() => {
            setUser({})
           }).catch((error) => {
            console.log(error);
           });
    }

    return {
        user,
        handleSignInWithGoogle,
        handleSignOut
    }


}

export default useFirebase;