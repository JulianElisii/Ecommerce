import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
//import CheckoutCard from './CkeckoutCard';
//import Total from './Total';
import CardPage from './CardPage';
import { useSelector } from 'react-redux';
import Total from './Total';




const Item = styled(({ theme }) => ({
  root: {
      flexGrow:1,
      padding :"2rem"
  }
}));

export default function Cart() {
    const classes = Item();

    const { basketList } = useSelector(state => state.basket);
   


 const FormRow = () => {
     return( 
         <React.Fragment>
             {basketList?.map((item)=> (
                <Grid item xs={12} sm={6} md={4} lg={3} >
          <CardPage key={item.id} productB={item}/>
        </Grid>
             ))}
         </React.Fragment>
     )
 }



  return (
      <div className={classes.root}> 
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid item xs={12} >
           <Typography align='center' gutterBottom variant='h1'>
           </Typography>
        </Grid>
        <Grid item xs={12} >
           <Typography align='center' gutterBottom variant='h1'>
           </Typography>
        </Grid>
        
        <Grid item xs={12} >
           <Typography align='center' gutterBottom variant='h4'>
               Shopping cart
           </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9} container spacing={2}>
         <FormRow/>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
           <Typography align='center' gutterBottom variant='h4'>
               <Total/>
           </Typography>
        </Grid>
      </Grid>
    </Box>
    </div> 
  );
}
