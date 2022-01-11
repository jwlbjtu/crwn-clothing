import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "redux-root-types";
import { RouterCartDropdownProps } from "cart-component-types";

import "./cart-dropdown.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import CartItemComponent from "../cart-item/cart-item.component";

import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { CartItem } from "shop-component-types";

const CartDropdown: React.FC<RouterCartDropdownProps> = ({
  cartItems,
  dispatch,
}) => {
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item: CartItem) => (
            <CartItemComponent key={item.id} item={item} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={(): void => {
          navigate("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state: RootState): { cartItems: CartItem[] } => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
