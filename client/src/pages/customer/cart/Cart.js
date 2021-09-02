import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Toaster, toast } from 'react-hot-toast';


export default function Cart() {
    const [cart, setCart] = useState([])
    const history = useHistory()

    function goToPage(url) { 
        history.push(url)
    }

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

    function deleteItem(id) {
        axios.delete(`http://localhost:5000/api/cart/${id}`).then((response) => {
            setCart(response.data.data)
            toast('Product deleted!', {
                icon: '😞',
            });
        }).catch((error) => console.log(error))
    }

    return (
        <div>
            <h1 className='p-2' style={{borderBottom: '5px double black', color: 'black'}}>Cart</h1>
            { 
                !cart.length ? (
                    <div style={{marginTop:'25vh'}}>
                        <h3>😟Cart is Empty!😟</h3>
                        <Button variant="warning" className="m-2" onClick={() => goToPage('/products')}>Add Products <FontAwesomeIcon icon={faChevronRight} /></Button>
                    </div>
                ) : (
                    <>
                        <div>
                            { cart.map((cartItem) =>{
                                console.log(cartItem);
                                return (
                                    <div className='container my-4' key={cartItem.id}>
                                        <Card style={{textAlign: "left", flexDirection: "row", boxShadow: '0px 0px 8px 0px black'}}>
                                            <Card.Body>
                                                <Card.Title>{cartItem.product_name}</Card.Title>
                                                <Card.Text >
                                                    <div className="d-inline">Qty: {cartItem.quantity}</div>
                                                    <div className="ms-4 d-inline ">Total Price: ${cartItem.quantity * cartItem.price}</div>
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Body style={{textAlign: "right", display:'flex', flexDirection:'column', alignItems: 'flex-end'}}>
                                                {/* <Button className='m-2 w-25' variant="primary" >Buy</Button> */}
                                                <Button className='m-2' size='lg' variant="danger" onClick={() => deleteItem(cartItem.id)}> <FontAwesomeIcon icon={faTrash} /> </Button>
                                            </Card.Body>
                                        </Card>
                                        
                                    </div>
                                )
                            })}
                        </div>
                        <div className="container">
                            <Card.Footer className='my-4 bg-light d-flex justify-content-between' style={{boxShadow: '0px 0px 8px 0px black'}}>
                                <div>Grand Total = ${countGrandTotal()}</div>
                                <Button variant='success' size='' className='mx-2' style={{fontWeight: 'bold'}} onClick={() => goToPage('/checkout')}>Check Out</Button>
                            </Card.Footer>
                        </div>
                    </>
                )
            }
            <Toaster />
        </div>
    )
}
