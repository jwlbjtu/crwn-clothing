declare module 'directory-component-types' {
    export interface DirectoryState {
        sections: Array<Section>
    }
    
    interface Section {
        title: string,
        imageUrl: string,
        id: number,
        size: string,
        linkUrl: string
    }
}



