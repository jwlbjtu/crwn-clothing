declare module 'shop-component-types' {
    import { RouteComponentProps } from "react-router";
    import { ShopState } from "redux-root-types";

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
        collections: Collection[] | null
    };

    type Params = {
        [key: string]: any
    };

    export type CollectionPageProps = { collection: Collection | null } & RouteComponentProps<Params>;

    export type CollectionItemProps = {
        item: Item,
        addItem: (item: Item) => void
    };

    export type ShopPageProps = {
        fetchCollectionsStart: () => void
    } & ShopState & RouteComponentProps;
}