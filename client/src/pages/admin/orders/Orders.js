import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function Orders() {
    const [ orders, setOrders ] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory()

    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:5000/api/orders').then(response => {
            setOrders(response.data.data)
            setLoading(false)
        }).catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h1 style={{borderBottom: "3px double black"}}>Orders</h1>
            { loading ? (
                <h1>Loading....</h1>
            ) : (
                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Order Id</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            { orders.map((order) => {
                                return (
                                    <tr key={order.orderId}>
                                        <td >{order.orderId}</td>
                                        <td>{order.name}</td>
                                        <td>{order.address}</td>
                                        <td>{order.phone}</td>
                                        <td>{order.email}</td>
                                        <td>
                                            <Button 
                                                onClick={() => history.push(`/admin/orders/${order.orderId}`)} 
                                                size='sm' 
                                                variant='warning'>
                                                <FontAwesomeIcon icon={faInfoCircle}/>
                                            </Button>
                                        </td>
                                    </tr> 
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
            )}
            
        </div>
    )
}
