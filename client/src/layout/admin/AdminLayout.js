import React from 'react'
import SideBar from './components/SideBar'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function AdminLayout(props) {
    return (
        <>
            <div className="row w-100 m-0">  
                <div className="col-2 p-0 position-fixed">
                    <SideBar />
                </div>
                <div className='col-10' style={{position: "absolute", left:'16.5vw'}}>
                    <div className="row position-fixed w-100" >
                        <div className='navbar col-11 p-0' style={{width:'75.2%'}}>
                            <input type='text' placeholder='Search' className='search-bar w-100 px-2' />
                        </div>
                        <div className="sign-out col-1">
                            <h6 style={{marginTop: "12px"}}>Sign Out</h6>
                        </div>
                    </div>
                    <div className='row' style={{marginTop: '10vh' }}>
                        {props.children}
                    </div>
                </div>
                
            </div>
        </>
    )
}
