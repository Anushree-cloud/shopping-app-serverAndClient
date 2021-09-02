import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap'

export default function Orders() {
    const [ orders, setOrders ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/orders').then(response => {
            setOrders(response.data.data)
        }).catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h1 style={{borderBottom: "3px double black"}}>Orders</h1>
            { orders.map(orderItem => {
                return(
                    <Card className="mb-2" style={{textAlign: 'start'}}>
                        <Card.Header as="h5">
                            Order Id: <p className="text-primary" style={{fontWeight:"normal",fontStyle:"italic",display:"inline"}}>{orderItem.orderId}</p>
                        </Card.Header>

                        <Card.Body>

                            <Card.Title>
                                Name: <p className="text-success" style={{fontWeight:"normal",fontStyle:"italic",display:"inline"}}>{orderItem.name}</p>
                            </Card.Title>
                            <Card.Title>
                                Delivery Address: <p className="text-success" style={{fontWeight:"normal",fontStyle:"italic",display:"inline"}}>{orderItem.address}</p>
                            </Card.Title>
                            <Card.Title>
                                Phone No: <p className="text-success" style={{fontWeight:"normal",fontStyle:"italic",display:"inline"}}>{orderItem.phone}</p>
                            </Card.Title>

                            <Card.Title>Order Details:</Card.Title>
                            <ListGroup className="mb-2 border-dark">
                                { orderItem.orderItems.map(order => {
                                    return (
                                        <ListGroupItem className="border-dark d-flex flex-row justify-content-between">
                                            <div className=''>
                                                <Card.Text>Product Id: <b>{order.id}</b></Card.Text>
                                                <Card.Text>Product Name: <b>{order.product_name}</b></Card.Text>
                                                <Card.Text>Product Quantity: <b>{order.quantity}</b></Card.Text>
                                            </div>
                                            <div>
                                                <Card.Img className="border border-primary rounded" style={{height:'100px', width:'100px'}} src={order.imgUrl} />
                                            </div>
                                        </ListGroupItem>
                                    )
                                })}
                            </ListGroup>

                        </Card.Body>
                    </Card>
                )
            })}
            
        </div>
    )
}
