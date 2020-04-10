import React from 'react';


import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector }  from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { CartDropdownButton,CartDropdownContainer,EmptyMessage, CartItemsContainer } from './cart-dropdown.styles';

const CartDropdown  = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {   
                cartItems.length ?
                cartItems.map(cartItem => (
                <CartItem key= {cartItem.id} item = {cartItem}/>
                ))
                :
                <EmptyMessage>Your cart is empty</EmptyMessage>
            }
        </CartItemsContainer>
            <CartDropdownButton 
                onClick = {() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>
                GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
);


const mapStateToProps =createStructuredSelector({
    cartItems: selectCartItems
});

export default  withRouter(connect(mapStateToProps)(CartDropdown));