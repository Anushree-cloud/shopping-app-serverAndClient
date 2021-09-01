import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'

export default function Cart() {
    const [cart, setCart] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/cart').then((response) => {
            setCart(response.data.data)
        }).catch((error) => console.log(error))
    }, [])

    function countGrandTotal() {
        let grandTotal = cart.reduce((acc, item) => {
            return acc += ( item.price * item.quantity )
        }, 0)
        return grandTotal
    }

    return (
        <div>
            <h1 className='m-4'>Cart</h1>
            { 
                !cart.length ? (
                    <h3>Cart is Empty! 😟</h3>
                ) : (
                    <>
                        <div>
                            { cart.map((cartItem) =>{
                                console.log(cartItem);
                                return (
                                    <div className='container my-2' key={cartItem.id}>
                                        <Card style={{textAlign: "left", flexDirection: "row"}}>
                                            <Card.Body>
                                                <Card.Title>{cartItem.product_name}</Card.Title>
                                                <Card.Text>
                                                    Qty: {cartItem.quantity}
                                                </Card.Text>
                                                <Card.Text>
                                                    Total Price: ${cartItem.price} x {cartItem.quantity} = ${cartItem.quantity * cartItem.price}
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Body style={{textAlign: "right", display:'flex', flexDirection:'column', alignItems: 'flex-end'}}>
                                                <Button className='m-2 w-25' variant="primary" >Buy</Button>
                                                <Button className='m-2 w-25' variant="danger" >Delete</Button>
                                            </Card.Body>
                                        </Card>
                                        
                                    </div>
                                )
                            })}
                        </div>
                        <div className="container">
                            <Card.Footer className='my-4 bg-light d-flex justify-content-between'>
                                <div>Grand Total = {countGrandTotal()}</div>
                                <Button variant='success' size='sm' className='mx-2' style={{width: '11%', fontWeight: 'bold'}}>Buy All</Button>
                            </Card.Footer>
                        </div>
                    </>
                )
            }
        </div>
    )
}
