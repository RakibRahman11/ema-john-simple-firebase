import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged   } from "firebase/auth";
import { useEffect, useState } from "react";
import initialAuthentication from "../Firebase/firebase.init";

initialAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})

    
    const googleProvider = new GoogleAuthProvider();

    const googleSignin = () => {
        const auth = getAuth();
        return signInWithPopup(auth, googleProvider)
            
    }

    const logout = () =>{
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({})
          })
    }

    useEffect(()=>{
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if(user) {
              setUser(user);
            }
          });
    },[])

    return{
        user,
        googleSignin,
        logout
    }
}

export default useFirebase;