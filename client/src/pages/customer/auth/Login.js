import React, { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../../context'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { auth, login } = useContext(AuthContext)
    const history = useHistory()

    const onSubmitHandler = (event) => {
        event.preventDefault()
        login(email, password)
        console.log(auth);
        auth ? history.push('/') : history.push('/login')
    }

    return (
        <div className='d-flex align-items-center flex-column' style={{marginTop: '15vh'}}>
            <h1 className="p-2 bg-dark text-light w-75 rounded">Login</h1>
            <Form onSubmit={onSubmitHandler} className="w-75 form-control" style={{textAlign: 'left'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
