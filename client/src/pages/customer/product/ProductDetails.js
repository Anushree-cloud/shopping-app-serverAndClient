import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom';
import { Card, Button, Spinner } from 'react-bootstrap'

export default function ProductList() {
    const [productItem, setProductItem] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const history = useHistory()
    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:5000/api/products/${id}`).then(response =>{
            console.log(response.data.data);
            setProductItem(response.data.data)
            setLoading(false)
        }).catch(error => {
            console.log(error);
        })
    }, [])

    function goToPage(url) { 
        history.push(url)
    }

    return (
        <>
            {
                loading ? (
                    <Spinner animation="border" role="status" style={{marginTop: "35vh", width: '100px', height: '100px'}}>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : (
                    <Card className="text-center align-items-center">
                        {/* <Card.Header className="w-100 bg-warning">Featured</Card.Header> */}
                        <Card.Img src={productItem.imgUrl} className="w-25 h-25" />
                        <Card.Body>
                            <Card.Title>{productItem.product_name}</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Card.Text>Price: ${productItem.price}</Card.Text>
                            <Button variant="primary" className="m-2">Add To Cart</Button>
                            <Button variant="warning" className="m-2" onClick={() => goToPage('/products')}>Product List</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted w-100">2 days ago</Card.Footer>
                    </Card>
                )
            }   
        </>
    )
}
