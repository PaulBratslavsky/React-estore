import { createSelector } from 'reselect'

const selectProducts = state => state.items

export const selectProductItems = createSelector(
    [selectProducts],
    (items) => items
)