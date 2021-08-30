import React, { useEffect, useState} from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import { Table, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'


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

    function deleteProduct(id) {
        axios.delete(`http://localhost:5000/api/products/${id}`).then((response) => {
            console.log(response.data.message);
        }).catch((error) => console.log(error))
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
                                <th className="w-50">Image</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { productList.map((product) => {
                                return (
                                    <tr key={product.id}>
                                        <td >{product.id}</td>
                                        <td>{product.product_name}</td>
                                        <td style={{width: 'min-content'}}><img src={product.imgUrl} style={{width:'15%'}} /></td>
                                        <td>${product.price}</td>
                                        <td>
                                            <Button 
                                                onClick={() => goToPage(`/admin/products/edit/${product.id}`)}
                                                variant="success"
                                                size="sm"
                                                className="m-1">
                                                    <FontAwesomeIcon icon={faEdit} color='white'/>
                                                </Button>
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                className="m-1">
                                                    <FontAwesomeIcon icon={faTrashAlt} color="white" onClick={() => deleteProduct(product.id)} />
                                            </Button>
                                        </td>
                                    </tr> 
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
            )}
            
        </>
    )
}
