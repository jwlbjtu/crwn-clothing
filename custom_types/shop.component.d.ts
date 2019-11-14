declare module 'shop-component-types' {
    export interface Item {
        id: number,
        name: string,
        imageUrl: string,
        price: number
    }

    export interface CartItem extends Item {
        quantity: number
    }

    export interface Collection {
        id: number,
        title: string,
        routeName: string,
        items: Array<Item>
    }

    export interface ShopPageState {
        collections: Array<Collection>
    }

    export interface CollectionPreviewProps {
        title: string,
        routeName: string,
        items: Array<Item>
    }

    export interface CollectionItemProps {
        item: Item,
        addItem: (item: Item) => void
    }
}