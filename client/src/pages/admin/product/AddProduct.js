import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

export default function AddProduct() {
    const [image, setImage] = useState('')
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')
    const history = useHistory()

    function addProduct() {
        let newProduct = {
            imgUrl: image,
            product_name: productName,
            price: price
        }
        axios.post('http://localhost:5000/api/products', newProduct).then( response => {
            console.log(response.data.data);
            toast('Product Added!')
            history.push('/admin/products')
        }).catch( error => {
            console.log(error);
        })
    }

    function submitHandler() {
        addProduct()
    }

    return (
        <div className="d-flex align-items-center flex-column">
            <h1>Add Product</h1>
            <Form className="form-control m-3 " style={{textAlign: 'left', width: '80%'}} onSubmit={submitHandler} >

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product's Name" onChange={(event) => setProductName(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product's Image URL" onChange={(event) => setImage(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product's Price" onChange={(event) => setPrice(event.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit Details
                </Button>
            </Form>

            <ToastContainer />

        </div>
    )
}
