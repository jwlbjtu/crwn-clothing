declare module 'cart-component-types' {
    import { Item, CartItem } from 'shop-component-types';

    export interface CartIconProps {
        toggleCartHidden: () => void,
        itemCount: number
    }

    export interface CartDropDownProps {
        cartItems: Array<CartItem>
    }

    export interface CartItemProps {
        item: CartItem
    }
}