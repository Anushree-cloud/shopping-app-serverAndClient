import React from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faFile, faShoppingCart, faUsers } from '@fortawesome/free-solid-svg-icons'

export default function SideBar() {
    return (
        <>
            <div className='sidebar d-flex flex-column align-items-start'>
                <div className="w-100 d-flex flex-row">
                    <div className='sidebar-header text-light bg-dark px-4 py-2'>
                        <h3>Admin</h3>
                    </div>
                    <div className='navbar'>
                        <input type='text' placeholder='Search' className='search-bar w-100 px-3' />
                    </div>
                    <div className="sign-out">
                        <h6 className='mt-3'>Sign Out</h6>
                    </div>
                </div>
                <div className='sidebar-itemList'>
                    <div className='sidebar-item py-2 px-4'>
                        <FontAwesomeIcon icon={faTachometerAlt} color="#0d6efd"/>
                        <a className='text-primary sidebar-item-link' style={{textDecoration: 'none'}} href='#'>Dashboard</a>
                    </div>
                    <div className='sidebar-item py-2 px-4'>
                        <FontAwesomeIcon icon={faFile}/>
                        <a className='text-dark sidebar-item-link' style={{textDecoration: 'none'}} href='#'>Orders</a>
                    </div>
                    <div className='sidebar-item py-2 px-4'>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <a className='text-dark sidebar-item-link' style={{textDecoration: 'none'}} href='#'>Products</a>
                    </div>
                    <div className='sidebar-item py-2 px-4'>
                        <FontAwesomeIcon icon={faUsers} />
                        <a className='text-dark sidebar-item-link' style={{textDecoration: 'none'}} href='#'>Customers</a>
                    </div>
                </div>
            </div>
        </>
    )
}
