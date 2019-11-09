declare module 'collection-preview-component-types' {
    import { Item } from 'shop-component-types';
    
    export interface CollectionPreviewProps {
        title: string,
        routeName: string,
        items: Array<Item>
    }
}