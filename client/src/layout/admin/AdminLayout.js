import React from 'react'
import SideBar from './components/SideBar'
import './styles.css'

export default function AdminLayout(props) {
    return (
        <>
            <div className="row w-100 m-0">  
                <div className="col-2 p-0 position-fixed">
                    <SideBar />
                </div>
                <div className='col-10' style={{marginLeft:'16.5vw'}}>
                    <div className='row' style={{marginTop: '0vh' }}>
                        {props.children}
                    </div>
                </div>
                
            </div>
        </>
    )
}
