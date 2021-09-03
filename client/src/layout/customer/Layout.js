import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../../context'
import Navbar from './components/Navbar'

export default function Layout(props) {
    const { auth } = useContext(AuthContext)
    // console.log(auth)
    return (
        <>
            { auth ? (
                <>
                    <Navbar />
                    {props.children}
                </>
            ) : (
                <Redirect push to='/login' />
            )}
            
        </>
    )
}
