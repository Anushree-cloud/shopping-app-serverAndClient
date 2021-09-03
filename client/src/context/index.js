import React, { createContext, useState } from 'react'
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast'

export const AuthContext = createContext()

export const AuthContextProvider = (props) => {
    const [auth, setAuth] = useState(false)
    const [user, setUser] = useState({})

    function login(email, password, callBack) {
        axios.post('http://localhost:5000/api/auth/login', { email, password }).then(response => {
            console.log(response.data)
            const { authCheck, users } = response.data.data
            setUser(users)
            toast(response.data.message)
            setAuth(authCheck)
            callBack(auth)
        }).catch(error => {
            console.log(error)
            toast('Something went wrong!')
            callBack(false)
        })
    }

    function logout(callBack){
        axios.get('http://localhost:5000/api/auth/logout').then(response => {
            setAuth(response.data.data.authCheck)
            toast(response.data.message)
            callBack(response.data.data.authCheck)
        }).catch(error => {
            console.log(error)
            toast('Something went wrong!')
            callBack(true)
        })
    }

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {props.children}
            <Toaster />
        </AuthContext.Provider>
    )
}


