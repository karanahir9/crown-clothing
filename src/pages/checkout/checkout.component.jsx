import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import  StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { CheckoutHeaderContainer, CheckoutPageContainer, HeaderBlockContainer, TotalContainer, TestWarningContainer } from './checkout.styles.jsx';
//import CartItem from '../../components/cart-item/cart-item.component';

const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem => ( 
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>))
        }

        <TotalContainer>
            <span>TOTAL: ${total}</span>
        </TotalContainer>
        <TestWarningContainer>
            *Please use the following test credit card to for payment* <br/>
            4242 4242 4242 4242 - Exp: 12/20 - CVV: 123
        </TestWarningContainer>
        <StripeCheckoutButton price={total}/>
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);