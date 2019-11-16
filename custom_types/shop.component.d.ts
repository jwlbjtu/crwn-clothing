declare module 'shop-component-types' {
    export type Item = {
        id: number,
        name: string,
        imageUrl: string,
        price: number
    }

    export type CartItem = { quantity: number } & Item;

    export type Collection = {
        id: number,
        title: string,
        routeName: string,
        items: Array<Item>
    }

    export type CollectionPreviewProps = {
        title: string,
        routeName: string,
        items: Array<Item>
    }

    export type CollectionsOverviewProps = {
        collections: Collection[]
    }

    export type CollectionItemProps = {
        item: Item,
        addItem: (item: Item) => void
    }
}