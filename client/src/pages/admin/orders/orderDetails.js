import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, ListGroup, ListGroupItem, Spinner, Button } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'
import { Toaster, toast } from 'react-hot-toast'

export default function OrderDetails() {
    const [order, setOrder] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const history = useHistory()

    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:5000/api/orders/${id}`).then(response => {
            setOrder(response.data.data)
            setLoading(false)
        }).catch(error => {
            console.log(error)
            toast.error('Something went wrong!')
        })
    }, [])


    return (
        <>
            { loading ? (
                <Spinner animation="border" role="status" style={{marginTop: "35vh", width: '100px', height: '100px'}}>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <div>
                    <Card className="mb-2" style={{textAlign: 'start'}}>
                        <Card.Header as="h5">
                            Order Id: <p className="text-primary" style={{fontWeight:"normal",fontStyle:"italic",display:"inline"}}>{order.orderId}</p>
                        </Card.Header>

                        <Card.Body>

                            <Card.Title>
                                Name: <p className="text-success" style={{fontWeight:"normal",fontStyle:"italic",display:"inline"}}>{order.name}</p>
                            </Card.Title>
                            <Card.Title>
                                Delivery Address: <p className="text-success" style={{fontWeight:"normal",fontStyle:"italic",display:"inline"}}>{order.address}</p>
                            </Card.Title>
                            <Card.Title>
                                Phone No: <p className="text-success" style={{fontWeight:"normal",fontStyle:"italic",display:"inline"}}>{order.phone}</p>
                            </Card.Title>

                            <Card.Title>Order Details:</Card.Title>
                            <ListGroup className="mb-2 border-dark">
                                { order.orderItems.map(order => {
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
                        
                        <Button variant="outline-success" onClick={() => history.push('/admin/orders')}>Go Back</Button>
                    </Card>
                </div>
            )}
            <Toaster />
        </>
    )
}
