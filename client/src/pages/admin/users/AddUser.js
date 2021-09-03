import React, { useState } from 'react'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Toaster, toast } from 'react-hot-toast'

export default function AddUser() {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    function addUser() {
        let newUser = {
            name: name,
            address: address,
            phone: phone,
            email: email,
            password: password
        }

        axios.post('http://localhost:5000/api/users', newUser).then( response => {
            console.log(response.data.data);
            toast.success('New User Added!')
            history.push('/admin/users')
        }).catch( error => {
            console.log(error);
            toast.error('Something went wrong!')
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        addUser()
    }

    return (
        <div className="d-flex align-items-center flex-column">
        <h1>Add New-User's Details</h1>
        <Form className="form-control m-3 " style={{textAlign: 'left', width: '80%'}} onSubmit={submitHandler} >

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter User's Name" onChange={(event) => setName(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter User's Address" onChange={(event) => setAddress(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter User's Phone" onChange={(event) => setPhone(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter User's Email" onChange={(event) => setEmail(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="Enter Password" onChange={(event) => setPassword(event.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit Details
            </Button>
        </Form>

        <Toaster />

    </div>
    )
}
