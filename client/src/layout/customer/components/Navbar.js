import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import './css/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore } from '@fortawesome/free-solid-svg-icons'

export default function NavBar(){
    return(
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="position-sticky w-100" style={{ boxShadow: "0px 2px 15px 2px black"}}>
                <div className="mx-4">
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Navbar.Brand href="#home" style={{color: '#ffc107'}}>
                            <FontAwesomeIcon icon={faStore} color="#ffc107" className="mx-2"/>
                            Shopping App
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <NavLink to='/' className="mx-2 text-decoration-none text-warning navLinkHover">Home</NavLink>
                            <NavLink to='/products'className="mx-2 text-decoration-none text-warning navLinkHover">Product</NavLink>
                            {/* <NavLink to='#'>Login</NavLink> */}
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </>
    )
}