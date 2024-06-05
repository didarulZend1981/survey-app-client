import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";
export const AuthContext = createContext(null);
import axios from 'axios'
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();
    

     //  social provider
     const googleProvider = new GoogleAuthProvider();
     const FacebookProvider = new FacebookAuthProvider();
     // -------------------
     const googleLogin =() =>{
       setLoading(true)
       return signInWithPopup(auth, googleProvider);
    }
 
   
 
    const FacebookLogin =() =>{
     setLoading(true)
     return signInWithPopup(auth, FacebookProvider);
    }
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }


//      // save user
//   const saveUser = async user => {
//     // console.log("authPro Save----",user)
//     const currentUser = {
//       email: user?.email,
//       name: user?.displayName,
//       role: 'user',
//       status: 'Verified',
//     }
//     // console.log("currentUser---",currentUser)
//     const { data } = await axiosPublic.put(
//         `/user`,
//         currentUser
//     )
   

  
//     // console.log("data base gooo---",data);
//     return data
//   }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
             if (currentUser) {
                
                // get token and store client
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                        }
                    })


                    // saveUser(currentUser)
               
                

              }else{
                // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
                localStorage.removeItem('access-token');
              }
            console.log('current user', currentUser);
            setLoading(false);




            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                        }
                    })
            }
            else {
                // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
                localStorage.removeItem('access-token');
            }
            setLoading(false);


        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleLogin,
        FacebookLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;