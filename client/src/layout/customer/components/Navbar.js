import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Navbar, Nav, Dropdown } from 'react-bootstrap'
import { AuthContext } from '../../../context'
import './css/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faShoppingCart, faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons'

export default function NavBar(){
    const { logout } = useContext(AuthContext)
    const history = useHistory()

    const onLogout = () => {
        logout((auth) => {
            auth ? history.push('/') : history.push('/login')
        })
    }

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
                    <NavLink to='/cart' className="mx-3 d-inline text-decoration-none text-warning navLinkHover"><FontAwesomeIcon icon={faShoppingCart} style={{width:"20px", height:"20px"}} /></NavLink>
                    {/* <NavLink to='/cart' className="mx-3 text-decoration-none text-warning navLinkHover">
                        <FontAwesomeIcon icon={faBars} style={{width:"20px", height:"20px"}} />
                    </NavLink> */}
                    <NavLink onClick={onLogout} className="mx-1 text-decoration-none text-warning navLinkHover"><FontAwesomeIcon icon={faUserCircle} style={{width:"20px", height:"20px"}} /></NavLink>
                    {/* <Dropdown>
                        <Dropdown.Toggle className="d-inline" id="dropdown-basic">
                            {/* <FontAwesomeIcon icon={faBars} /> 
                        </Dropdown.Toggle>
                        
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}
                </div>
                
            </Navbar>
        </>
    )
}