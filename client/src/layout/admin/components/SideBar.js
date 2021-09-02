import React from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faFile, faShoppingCart, faUsers, faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'

export default function SideBar() {
    const history = useHistory()
    function goToPage(url){
        history.push(url)
    }
    return (
        <>
            <div className='sidebar align-items-start'>
                <div className='sidebar-header text-light bg-dark px-4 py-1 w-100'>
                    <h3>Admin</h3>
                </div>
                <div className='sidebar-itemList w-100'>
                    <div className='sidebar-item py-2 px-4'>
                        <div className="d-inline"><FontAwesomeIcon icon={faTachometerAlt} color="#0d6efd"/></div>
                        <p className='text-primary sidebar-item-link d-inline' onClick={() => goToPage('/admin')} >Dashboard</p>
                    </div>
                    <div className='sidebar-item py-2 px-4'>
                        <div className="d-inline"><FontAwesomeIcon icon={faFile}/></div>
                        <p className='text-dark sidebar-item-link d-inline' onClick={() => goToPage('/admin/orders')} >Orders</p>
                    </div>
                    <div className='sidebar-item py-2 px-4'>
                        <div className="d-inline"><FontAwesomeIcon icon={faShoppingCart} /></div>
                        <p className='text-dark sidebar-item-link d-inline' onClick={() => goToPage('/admin/products')} >Products</p>
                    </div>
                    <div className='sidebar-item py-2 px-4'>
                        <div className="d-inline"><FontAwesomeIcon icon={faFolderPlus} /></div>
                        <p className='text-dark sidebar-item-link d-inline' onClick={() => goToPage('/admin/products/add')}  >Add Product</p>
                    </div>
                    <div className='sidebar-item py-2 px-4'>
                        <div className="d-inline"><FontAwesomeIcon icon={faUsers} /></div>
                        <p className='text-dark sidebar-item-link d-inline'>Customers</p>
                    </div>
                </div>
            </div>
        </>
    )
}
