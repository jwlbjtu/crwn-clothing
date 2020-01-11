declare module 'directory-component-types' {
    export type  DirectoryProps = {
        sections: Array<Section>
    }
    
    export type Section = {
        title: string,
        imageUrl: string,
        id: number,
        size: string,
        linkUrl: string
    }
}



