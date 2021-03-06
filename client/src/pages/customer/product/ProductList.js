import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './css/styles.css'
import { Card, Button, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';


export default function ProductList() {
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory()

    useEffect(() => {
        setLoading(true)

        axios.get('http://localhost:5000/api/products').then(response =>{
            setProductList(response.data.data)
            setLoading(false)
        }).catch(error => {
            console.log(error);
        })
    }, [])


    function addToCart(id) {
        axios.post('http://localhost:5000/api/cart', { productId: id }).then((response) => {
            console.log(response.data.data)
            toast.success('Product Added!')
        }).catch(error => console.log(error))
    }


    function onViewDetails(id) {
        goToPage(`/product/details/${id}`)
    }
    
    function goToPage(url) { 
        history.push(url)
    }
    console.log(productList);

    return (
        <>
            {
                loading ? ( 
                    <Spinner animation="border" role="status" style={{marginTop: "35vh", width: '100px', height: '100px'}}>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : (
                    <div className="card-container container row" >
                        {
                            productList.map( (product) => {
                                return (
                                    <div className="col col-lg-4">
                                        <Card className="align-items-center m-4 card-hover" style={{width: "18rem", height: "24rem"}}>
                                            <Card.Img style={{width: "200px", height: "200px"}} src={product.imgUrl} />
                                            <Card.Body>
                                                <Card.Title>{product.product_name}</Card.Title>
                                                <Card.Text>
                                                    ${product.price}
                                                </Card.Text>
                                                <Button className="btn btn-warning m-2" onClick={() => onViewDetails(product.id)}>View Details</Button>
                                                <Button className="btn btn-primary m-2" onClick={() => addToCart(product.id)} >Add To Cart</Button>
                                                <Toaster />
                                            </Card.Body>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        </>
    )
}
