import { createSelector } from 'reselect'

const selectDirectory = state => state.menu


export const selectDirectoryItems = createSelector(
    [selectDirectory],
    (menu) => menu
)