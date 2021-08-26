import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});


export default function ProductList() {
    const classes = useStyles();
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
    console.log(productList);

    return (
        <>
            {
                loading ? ( 
                    <h1>Loading....</h1>
                ) : (
                    productList.map( (product) => {
                        return (
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media}
                                    image={product.imgUrl}
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {product.product_name}
                                        </Typography>
                                        {/* <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                        </Typography> */}
                                    </CardContent>
                                </CardActionArea>

                                <CardActions>
                                    <Button size="small" color="primary" onClick={() => goToPage(`/product/details/${product.id}`)}>
                                        Details
                                    </Button>
                                    <Button size="small" color="primary">
                                        Add to Cart
                                    </Button>
                                </CardActions>
                            </Card>
                        )
                    })
                )
            }
        </>
    )
}
