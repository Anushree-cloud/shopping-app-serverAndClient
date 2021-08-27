import React, { useEffect, useState} from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import { Button } from 'bootstrap'

export default function ProductListAdmin() {
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
    
    function goToPage(url) { 
        history.push(url)
    }
    return (
        <>
            { loading ? (
                <h1>Loading....</h1>
            ) : (
                <div>
                    <h1>Product List</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Image URL</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        {/* { productList.map((product) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{product.id}</td>
                                        <td>{product.product_name}</td>
                                        <td>{product.imgUrl}</td>
                                        <td>${product.price}</td>
                                        <td>
                                            <Button onClick={() => goToPage('/products/edit/id')}>Edit</Button>
                                            <Button>Delete</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })} */}
                        
                    </Table>
                </div>
            )}
            
        </>
    )
}
