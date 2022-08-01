import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';


export default function Navbar() {

    //const [{basket}, dispatch] = useStateValue();
    const { basketList } = useSelector(state => state.basket);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" >
                <Toolbar>
                <Link to="/">
                    <IconButton>
                    <HomeIcon />
                    </IconButton>
                    </Link>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        E-comerce
                    </Typography>
                    
                    <div>
                        <Link to="/singUp"> <IconButton> < AccountCircleIcon/ > </IconButton> </Link>
                       <Link to="/cart">
                        <Badge badgeContent={basketList?.length} color="secondary">
                        <IconButton> < ShoppingCartIcon /> </IconButton>
                        </Badge>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}