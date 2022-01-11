import React from 'react';
import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { HeaderProps, HeaderBasicProps } from 'header-component-types';
import { RootState } from 'redux-root-types';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { signOutStart } from '../../redux/user/user.actions';

const Header: React.FC<HeaderProps> = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <a target="_blank" href="https://github.com/jwlbjtu/crwn-clothing">
        CONTECT
      </a>
      {currentUser ? (
        <OptionLink as='div' onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector<RootState, HeaderBasicProps>({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = (dipatch: any) => ({
  signOutStart: () => dipatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
