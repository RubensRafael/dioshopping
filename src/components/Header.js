import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';
import { sacola, nome } from './icones'

const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
            <div>
            {nome}
            {sacola}
            </div>
            <Link className='link' to="/">
                Home
            </Link>
            <Link className='link' to="/contato">
                Contato
            </Link>
            <Cart />   

            
        </Grid>
    )
}

export default Header;
