declare module 'cart-component-types' {
    import { Item } from 'shop-component-types';

    export interface CartIconProps {
        toggleCartHidden: () => void,
        cartItems: Array<Item>
    }

    export interface CartDropDownProps {
        cartItems: Array<Item>
    }
}