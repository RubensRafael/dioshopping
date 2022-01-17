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
        <div style={{display: 'flex', flexDirection : 'column', maxWidth: '25%', alignItems: 'center'}}>
         
                
                    
                    <img style={{objectFit: 'cover' }}  src={product.image} alt={product.name_product}></img>
                    <h6>
                        {children}
                    </h6>
                    <p>
                        R$ {product.price.toFixed(2)}
                    </p>
                    
                
                <button 
                    
                    onClick={()=>dispatch(cartActions.Add(cart, product))}
                >
                    Adicionar
                </button>
                
            
        </div>
    )
}

export default Card;
