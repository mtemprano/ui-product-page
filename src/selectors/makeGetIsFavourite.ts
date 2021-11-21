import {createSelector, Selector} from "reselect";
import getFavouritesList from "./getFavouritesList";
import {GlobalStateInterface} from "../helpers";

const makeGetIsFavourite = (): Selector =>
    createSelector(getFavouritesList, (_: GlobalStateInterface, id: string) => id, (favouritesList: Array<string>, id) => {
        return !!favouritesList.find((favId) => favId === id)
    })

export default makeGetIsFavourite