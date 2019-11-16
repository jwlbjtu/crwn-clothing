import React from 'react';
import { connect } from 'react-redux';

import './directory.styles.scss';

import { DirectoryProps } from 'directory-component-types';

import MenuItem from '../menu-item/menu-item.component';
import { RootState } from 'redux-root-types';
import { selectSections } from '../../redux/directory/directory.selector';

class Directory extends React.Component<DirectoryProps, {}> {
  render() {
    return (
      <div className="directory-menu">
        {// using object spread operation instead of passing single props one by one
        this.props.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  sections: selectSections(state)
});

export default connect(mapStateToProps)(Directory);
