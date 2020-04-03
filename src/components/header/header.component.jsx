import React from 'react';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firbase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { HeaderContainer, OptionsContainer, OptionLink, LogoContainer } from "./header.styles";
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser,hidden, signOutStart }) => (
<HeaderContainer>
    <LogoContainer to="/">
        <Logo className="logo"/>
    </LogoContainer>
    <OptionsContainer>
        <OptionLink to= "/shop">
            SHOP
        </OptionLink>
        <OptionLink to= "/shop">
            CONTACT
        </OptionLink>
        {
            currentUser ? (
                <OptionLink as='div' onClick={ signOutStart }>
                    SIGN OUT
                </OptionLink>
            ) : (
                <OptionLink to="/signin">
                    SIGN IN
                </OptionLink>
            )}
            <CartIcon/>
    </OptionsContainer>
    {
        hidden ? null : <CartDropdown/>
    }
   
</HeaderContainer>

)
 
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});


const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);