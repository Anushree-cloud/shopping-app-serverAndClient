import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
    const [productItem, setProductItem] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const history = useHistory()
    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:5000/api/products/${id}`).then(response =>{
            console.log(response.data.data);
            setProductItem(response.data)
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
                    <h1>Loading....</h1>
                ) : (
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={productItem.imgUrl}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {productItem.product_name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Price: ${productItem.price}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => goToPage('/products')}>
                                Back to Listing
                            </Button>
                            <Button size="small" color="primary">
                                Add To Cart
                            </Button>
                        </CardActions>
                    </Card>
                )
            }   
        </>
    )
}
