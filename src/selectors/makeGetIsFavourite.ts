import {createSelector} from "reselect";
import getFavouritesList from "./getFavouritesList";

const makeGetIsFavourite = () =>
    createSelector(getFavouritesList, (_: any, id: string) => id, (favouritesList: Array<string>, id) => {
        return !!favouritesList.find((favId) => favId === id)
    })

export default makeGetIsFavourite