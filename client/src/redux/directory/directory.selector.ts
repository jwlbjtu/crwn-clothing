import { createSelector } from 'reselect';
import { RootState, DirectoryState } from 'redux-root-types';

const selectDirectory = (state: RootState) => state.directory;

export const selectSections = createSelector(
    [selectDirectory],
    (directory: DirectoryState) => directory.sections
);

