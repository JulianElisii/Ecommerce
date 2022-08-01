import React from 'react';
import accounting from "accounting"
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { getBasketTotal } from '../store/slices/products/Basket.Redux';



const Total = () => {

    const { basketList } = useSelector(state => state.basket);

    return (
        <div>
          <h5>Total items: {basketList?.length}</h5>  
          <h5>{accounting.formatMoney(getBasketTotal(basketList.price),"€")}</h5>
          <Button variant="contained" color='secondary'>Ckeck out</Button>  

        </div>
    );
}

export default Total;
