import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import NEWcompProductS from './Product';
import { getProduct } from '../store/slices/products/ProductsRedux';
import CardPage from './CardPage';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Products() {


  const { list: products } = useSelector(state => state.products);

  const dispatch = useDispatch();

    


  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch])


   

    
  return (
    <Box sx={{ flexGrow: 1 }} className={Item}>
      <Grid container spacing={3}>
      {products.map(product =>(
          <Grid item xs={12} sm={6} md={4} lg={3} >
         <NEWcompProductS key={product.id} product={product}/>
         
        </Grid>
      ))
      }
      </Grid>
      
    </Box>
  ); 
  
}

//HACER ESTADO GLOBAL DE LA APLICACION.