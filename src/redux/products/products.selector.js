import { createSelector } from 'reselect'

const selectProducts = state => state.items

export const selectProductItems = createSelector(
    [selectProducts],
    (items) => items
)

export const selectProductIsFetching = createSelector(
    [selectProducts],
    (items) => items.isFetching
)

export const selectProductToArray = createSelector(
    [selectProducts],
    ({items}) => items ? Object.keys(items).map(key => items[key]) : []
)

export const selectCategory = categoryID => createSelector(
    [selectProducts],
    (items) => items ? items[categoryID] : []
)