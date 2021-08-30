import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'

export default function EditProduct() {
    // const [product, setProduct] = useState({})
    const [image, setImage] = useState('')
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')
    const { id } = useParams()
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`).then((response) => {
            const { imgUrl, product_name, price } = response.data.data
            setProductName(product_name)
            setImage(imgUrl)
            setPrice(price)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    function updateProduct() {
        let updateProduct = {
            id: id,
            imgUrl: image,
            product_name: productName,
            price: price
        }

        axios.put(`http://localhost:5000/api/products/${id}`, updateProduct).then(response => {
            console.log(response)
            history.push('/admin/products')
        }).catch((error) => {
            console.log(error)
        })

    }
    
    

    return (
        <div className="d-flex align-items-center flex-column">
            <h1>Edit Product</h1>
            <h5>ID: { id }</h5>
            <Form className="form-control m-3" onSubmit={updateProduct} style={{textAlign: 'left', width: '80%'}}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product's Name" value={ productName } onChange={(event) => setProductName(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product's Image URL" value={ image } onChange={(event) => setImage(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product's Price" value={ price } onChange={(event) => setPrice(event.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Update Details
                </Button>
            </Form>
        </div>
    )
}
