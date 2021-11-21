import {createSelector} from "reselect"
import type {ExtendedProductListItem} from '../helpers';
import getFullFavouritesList from "./getFullFavouritesList";
import getFavouritesSearchText from "./getFavouritesSearchText";

export default createSelector([getFullFavouritesList, getFavouritesSearchText], (favouritesList: Array<ExtendedProductListItem> = [], favouritesSearchText: string) => {
    return favouritesList.filter(({ title }) => {
        const combinedString = title.toLowerCase();
        return combinedString.includes(favouritesSearchText.toLowerCase())
    })
})
