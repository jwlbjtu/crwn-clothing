import React from 'react';
import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

interface DirectoryState {
    sections: Array<Section>
}

interface Section {
    title: string,
    imageUrl: string,
    id: number,
    size: string,
    linkUrl: string
}

class Directory extends React.Component<{}, DirectoryState> {
    state = {
        sections: [
            {
              title: 'hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              size: '',
              id: 1,
              linkUrl: 'shop/hats'
            },
            {
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              size: '',
              id: 2,
              linkUrl: 'shop/jackets'
            },
            {
              title: 'sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              size: '',
              id: 3,
              linkUrl: 'shop/sneakers'
            },
            {
              title: 'womens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              linkUrl: 'shop/womens'
            },
            {
              title: 'mens',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              id: 5,
              linkUrl: 'shop/mens'
            }
        ]
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(section => (
                        <MenuItem key={section.id} 
                                  title={section.title.toUpperCase()} 
                                  imgUrl={section.imageUrl}
                                  size={section.size}
                        />
                    ))
                }
            </div>
        );
    }
}

export default Directory;