import React from 'react';
import { Paper, Grid, Typography, Button, makeStyles} from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from './store/actions/cart';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
  }));

const Card = ({ product, children }) => {
    const cart = useSelector( state => state.cart.value )
    const dispatch = useDispatch();
    const classes = useStyles();

    return(
        <div className='card-box'>
         
                
                    
                    <img className='card-image' src={product.image} alt={product.name_product}></img>
                    <div className='my-card-text'>
                        {children}
                    </div>
                    <div className='my-card-text' >
                        R$ {product.price.toFixed(2)}
                    </div>
                    
                
                <div   className='card-button-box' onClick={()=>dispatch(cartActions.Add(cart, product))}>
                    <div role='button' className='card-button'>Adicionar</div>
                </div>
                
            
        </div>
    )
}

export default Card;
