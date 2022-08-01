import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Paper, Typography } from '@mui/material';
import accounting from 'accounting';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from "axios"
import Products from './Products';
import { useDispatch } from 'react-redux';
import { actionTypes, setBasketList } from '../store/slices/products/Basket.Redux';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));



export default function NEWcompProductS({product }) {

const [expanded, setExpanded] = React.useState(false);

const dispatch = useDispatch();

const addToBasket = (product) => {
    
    dispatch(setBasketList(product));
    console.log(product) 
}


const handleExpandClick = () => {
    setExpanded(!expanded);
};
  return (

    
    <Card sx={{ maxWidth: 345 ,marginTop : 10,  marginLeft:2 }}>
            <CardHeader   
                action={
                    <Typography
                    > {accounting.formatMoney(product.price, "€")}
                    </Typography>
                }
                title={product.name}
                subheader="In Stock"
            />
            <CardMedia
                component="img"
                height="194"
                image={product.image}
                alt="Nike shoes"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {product.name}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="Add to card" onClick={() => addToBasket(product)}>
                    <AddShoppingCartIcon />
                </IconButton>
                {Array(product.rating)
                    .fill()
                    .map((_, i) => (
                        <p>&#11088;</p>
                    ))}
                    <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse  in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography>
                        {product.description}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card> 

      
  );

 
}