declare module 'shop-component-types' {
    import { RouteComponentProps } from "react-router";

    export type Item = {
        id: number,
        name: string,
        imageUrl: string,
        price: number
    }

    export type CartItem = { quantity: number } & Item;

    export type Collection = {
        id: string,
        title: string,
        routeName: string,
        items: Array<Item>
    };

    export type Collections = { 
        [key: string]: Collection 
    };

    export type CollectionPreviewProps = {
        title: string,
        routeName: string,
        items: Array<Item>
    };

    export type CollectionsOverviewProps = {
        collections: Collection[]
    };

    type Params = {
        [key: string]: any
    };

    export type CollectionPageProps = { collection: Collection | undefined } & RouteComponentProps<Params>;

    export type CollectionItemProps = {
        item: Item,
        addItem: (item: Item) => void
    };

    export type ShopPageProps = {
        updateCollections: (collectionMap: Collections) => any
    } & RouteComponentProps
}