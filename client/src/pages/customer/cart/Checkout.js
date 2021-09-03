import React, { useState } from 'react'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'


export default function Checkout() {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const history = useHistory()

    const submitUserDetails = (event) => {
        event.preventDefault()
        let newUser = {
            name: name,
            address: address,
            phone: phone,
            email: email
        }
        axios.post('http://localhost:5000/api/orders', newUser).then(response => {
            console.log(response.data.data)
            history.push('/')
            toast('Product Added!')
        }).catch((error) => console.log(error))
    }

    return (
        <div>
            <ToastContainer />
            <Form className="form-control m-3 " style={{textAlign: 'left', width: '80%'}} onSubmit={submitUserDetails} >

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Full Name" onChange={(event) => setName(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Delivery Address" onChange={(event) => setAddress(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Phone Number" onChange={(event) => setPhone(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter Email" onChange={(event) => setEmail(event.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">Submit Details</Button>
            </Form>
        </div>
    )
}
