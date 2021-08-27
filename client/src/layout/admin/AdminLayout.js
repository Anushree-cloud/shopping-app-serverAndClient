import React from 'react'
import SideBar from './components/SideBar'
import './styles.css'

export default function AdminLayout(props) {
    return (
        <>
            <div className="row w-100 m-0">  
                <div className="col-2 p-0">
                    <SideBar />
                </div>
                <div className='col-10'>
                    <div className="row h-auto">
                        <div className='navbar col-10 p-0'>
                            <input type='text' placeholder='Search' className='search-bar w-100 px-2' />
                        </div>
                        <div className="sign-out col-2">
                            <h6 className='mt-2'>Sign Out</h6>
                        </div>
                    </div>
                    <div className='row'>
                        {props.children}
                    </div>
                </div>
                
            </div>
        </>
    )
}
