import React, { createContext, useState } from 'react'
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast'

export const AuthContext = createContext()

export const AuthContextProvider = (props) => {
    const [auth, setAuth] = useState(false)
    const [user, setUser] = useState({})

    function login(email, password, callBack) {
        axios.post('http://localhost:5000/api/auth/login', { email, password }).then(response => {
            console.log(response.data);
            setUser(response.data.data.users)
            setAuth(response.data.data.authCheck)
            toast(response.data.message)
            callBack(auth)
        }).catch(error => {
            console.log(error)
            toast('Something went wrong!')
            callBack(false)
        })
    }

    function logout(callBack){
        axios.get('http://localhost:5000/api/auth/login').then(response => {
            setAuth(response.data.data.authCheck)
            toast(response.data.message)
            callBack(auth)
        }).catch(error => {
            console.log(error)
            toast('Something went wrong!')
            callBack(true)
        })
    }

    return (
        <AuthContext.Provider value={{ auth, user, login, logout }}>
            {props.children}
            <Toaster />
        </AuthContext.Provider>
    )
}


