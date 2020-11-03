import { createSelector } from 'reselect'

const CATEGORY_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5,
}

const selectProducts = state => state.items

export const selectProductItems = createSelector(
    [selectProducts],
    (items) => items
)

export const selectCategory = categoryID => createSelector(
    [selectProducts],
    (items) => items.find(item => item.id === CATEGORY_ID_MAP[categoryID])
)