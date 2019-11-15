declare module 'cart-component-types' {
    import { Item, CartItem } from 'shop-component-types';

    export interface CartIconProps {
        toggleCartHidden: () => void,
        cartItems: Array<Item>
    }

    export interface CartDropDownProps {
        cartItems: Array<CartItem>
    }

    export interface CartItemProps {
        item: CartItem
    }
}