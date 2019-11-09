import React from 'react';

import './directory.styles.scss';

import DIRECTORY_DATA from './directory.data';

import { DirectoryState } from 'directory-component-types';

import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component<{}, DirectoryState> {
    state = {
        sections: DIRECTORY_DATA
    }

    render() {
        return (
            <div className='directory-menu'>
                {   // using object spread operation instead of passing single props one by one
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;