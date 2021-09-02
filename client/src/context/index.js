import React, { createContext, useState } from 'react'
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast'

export const AuthContext = createContext()

export const AuthContextProvider = (props) => {
    const [auth, setAuth] = useState(false)
    const [user, setUser] = useState({})

    function login(email, password) {
        axios.post('http://localhost:5000/api/auth/login', { email, password }).then(response => {
            console.log(response.data);
            setUser(response.data.data.users)
            setAuth(response.data.authCheck)
            toast(response.data.message)
        }).catch(error => console.log(error))
        console.log(auth)
        return auth
    }

    return (
        <AuthContext.Provider value={{ auth, user, login }}>
            {props.children}
            <Toaster />
        </AuthContext.Provider>
    )
}


