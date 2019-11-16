declare module 'cart-component-types' {
    import { RouteComponentProps } from 'react-router';
    import { Item, CartItem } from 'shop-component-types';

    export type CartIconProps = {
        toggleCartHidden: () => void,
        itemCount: number
    }

    export type CartDropdownProps = {
        cartItems: Array<CartItem>,
        dispatch: any
    }

    export type RouterCartDropdownProps = RouteComponentProps<{}> & CartDropdownProps;

    export type CartItemProps = {
        item: CartItem
    }

    export type CheckoutPageProps = {
        cartItems: CartItem[],
        total: number
    }

    export type CheckoutItemProps = {
        cartItem: CartItem,
        addItem: (item: Item) => void,
        removeItem: (cartItem: CartItem) => void,
        clearItem: (cartItem: CartItem) => void
    }
}