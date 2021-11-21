import {createSelector} from "reselect"
import getListItems from "./getListItems"
import getFavouritesList from "./getFavouritesList";
import type {ExtendedProductListItem} from '../helpers';

export default createSelector([getListItems, getFavouritesList], (listItems: Array<ExtendedProductListItem> = [], favouritesList: Array<string>) => {
    return listItems.filter(({ id }) => !!favouritesList.find((favId) => favId === id))
})
