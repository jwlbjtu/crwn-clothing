declare module 'cart-component-types' {
    import { RouteComponentProps } from 'react-router';
    import { Item, CartItem } from 'shop-component-types';

    export interface CartIconProps {
        toggleCartHidden: () => void,
        itemCount: number
    }

    export interface CartDropdownProps {
        cartItems: Array<CartItem>,
        dispatch: any
    }

    export type RouterCartDropdownProps = RouteComponentProps<{}> & CartDropdownProps;

    export interface CartItemProps {
        item: CartItem
    }

    export interface CheckoutPageProps {
        cartItems: Array<CartItem>,
        total: number
    }

    export interface CheckoutItemProps {
        cartItem: CartItem,
        addItem: (item: Item) => void,
        removeItem: (cartItem: CartItem) => void,
        clearItem: (cartItem: CartItem) => void
    }
}