import React, { useEffect, useState} from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import { Table, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function UserListing() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    // const history = useHistory()

    // function goToPage(url) { 
    //     history.push(url)
    // }

    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:5000/api/users').then(response =>{
            setUsers(response.data.data)
            setLoading(false)
        }).catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <>
            { loading ? (
                <h1>Loading....</h1>
            ) : (
                <div>
                    <h1>Product List</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            { users.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td >{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.address}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.email}</td>
                                    </tr> 
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
            )}
            
        </>
    )
}
