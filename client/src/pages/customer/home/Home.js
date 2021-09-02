import React from 'react'
import { useHistory } from 'react-router'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faLock } from '@fortawesome/free-solid-svg-icons'
import Login from '../auth/Login'


export default function Home() {
    const history = useHistory()
    return (
        <div style={{marginTop:"30vh"}}>
            <h1 className='m-4' style={{color: "wheat", textShadow: "0px 0px 15px black"}}>🎉 Welcome to Shopping App 🎉</h1>
            <Button variant='warning' onClick={() => history.push('/products')}>Explore <FontAwesomeIcon icon={faChevronRight} /></Button>
            </div>
    )
}
