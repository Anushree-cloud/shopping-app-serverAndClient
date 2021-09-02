import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import './css/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons'

export default function NavBar(){
    return(
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="position-sticky w-100 justify-content-between" style={{ boxShadow: "0px 2px 15px 2px black"}}>
                <div className="mx-4 d-flex">
                    
                        <Navbar.Brand href="/" style={{color: '#ffc107'}}>
                            <FontAwesomeIcon icon={faStore} color="#ffc107" className="mx-2"/>
                            Shopping App
                        </Navbar.Brand>
                        <Nav className="w-100 d-flex justify-content-between flex-row">
                            <NavLink to='/' className="m-2 text-decoration-none text-warning navLinkHover">Home</NavLink>
                            <NavLink to='/products'className="m-2 text-decoration-none text-warning navLinkHover">Product</NavLink>
                        </Nav>

                </div>
                <div className="me-5">
                    <NavLink to='/cart' className="mx-3 text-decoration-none text-warning navLinkHover"><FontAwesomeIcon icon={faShoppingCart} style={{width:"20px", height:"20px"}} /></NavLink>
                    <NavLink to='/login' className="mx-1 text-decoration-none text-warning navLinkHover"><FontAwesomeIcon icon={faUserCircle} style={{width:"20px", height:"20px"}} /></NavLink>                    
                </div>
                
            </Navbar>
        </>
    )
}