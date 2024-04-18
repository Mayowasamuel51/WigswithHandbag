"use client"
import { createContext } from "react";
import { Toaster } from 'sonner';
import { signInWithEmailAndPassword } from "firebase/auth";


const AuthContext = createContext({})

export const AuthProvider = ({children}) => {

    return (
        <AuthContext.Provider >
            <Toaster />
            {children}
        </AuthContext.Provider>
    )
}

export const SignUpButton = ()=> {
    const createAccount = ()=> {
        // signInWithEmailAndPassword(auth, email, actionCodeSettings).then(()=> {
        //     console.log(auth)
        // }).catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //});
        alert('created')
    }
    return (
        <button onClick={createAccount} type="submit" className="w-full rounded-sm hover:text-BLUE border-2 border-black hover:bg-transparent hover:text-black bg-black duration-300 py-2 font-semibold text-white text-base md:text-">{false ?"Loading" : "Create Account"}</button>
    )
}
