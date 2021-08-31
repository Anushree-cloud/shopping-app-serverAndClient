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

    return (
        <div>
            <h1 className='m-4'>Cart</h1>
            { 
                !cart.length ? (
                    <h3>Cart is Empty! 😟</h3>
                ) : (
                    <div>
                        { cart.map((cartItem) =>{
                            return (
                                <Card>
                                    <Card.Header>{cartItem.id}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{cartItem.product_name}</Card.Title>
                                        <Card.Text>{cartItem.price}</Card.Text>
                                        <Card.Text>
                                            With supporting text below as a natural lead-in to additional content.
                                        </Card.Text>
                                        <Button variant="primary">Buy</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </div>
                )
            }
        </div>
    )
}
