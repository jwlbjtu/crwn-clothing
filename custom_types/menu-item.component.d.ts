declare module 'menu-item-component-types' {

    import { RouteComponentProps } from 'react-router-dom';

    type MenuItemProps = {
        title: string,
        imageUrl: string,
        size: string,
        linkUrl: string
    }
    
    export type RouterMenuItemProps = RouteComponentProps<{}> & MenuItemProps;
}

