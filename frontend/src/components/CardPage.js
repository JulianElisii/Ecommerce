import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
//import { useStateValue } from '../StateProvider';
//import { actionTypes } from '../reducer';
import { Typography } from '@mui/material';
import { useDispatch} from 'react-redux';
import { removeItem } from '../store/slices/products/Basket.Redux';
//import { useSelector } from 'react-redux';


/*const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));*/

const useStyle = styled((prop) => ({
    root: { maxWidth: 345, },
    action: { marginTop: "1rem", },
    media: {
        height: 0,
        paddingTop: "56.25%",
    },
    cardActions: {
        display: "flex",
        justifyContent: "space-between",
        textAlign: "center"
    },
    cardRating: {
        display: "flex"
    }

}));



export default function CardPage({productB}) {
    const classes = useStyle();

const dispatch = useDispatch()

    const DeleteToBasket = (productB) => {
    
        dispatch(removeItem(productB));
        console.log(productB) 
    }
    
  


   /* const removeItem = () => {
     dispatch({
         type: actionTypes.REMOVE_ITEM,
         id
     })
    }*/

    return (
        <Card /*className={classes.root}*/ sx={{ maxWidth: 345, marginTop: 10, marginLeft: 2 }}>
            <CardHeader
                action={
                    <Typography
                    //={classes.action}
                    > {productB.price} €
                    </Typography>
                }
                title={productB.name}
                subheader="In Stock"
            />
            <CardMedia
                component="img"
                height="194"
                image={productB.image}
                alt="Nike shoes"
            />
            <CardActions disableSpacing className={classes.cardRating}>
                {Array(productB.rating)
                    .fill()
                    .map((_, i) => (
                        <p>&#11088;</p>
                    ))}
                    <IconButton aria-label="Add to card" onClick={() => DeleteToBasket (productB)}>
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
