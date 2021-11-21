import { createAction } from "@reduxjs/toolkit"
import type { ExtendedProductListItem } from "../helpers"

const fetchRequested = createAction<undefined>("FETCH_REQUESTED")
const fetchSucceeded = createAction<Array<ExtendedProductListItem>>("FETCH_SUCCEEDED")
const fetchFailed = createAction<Error>("FETCH_FAILED")
const changePaginationIndex = createAction<number>("CHANGE_PAGINATION_INDEX")
const changeSearchText = createAction<string>("CHANGE_SEARCH_TEXT")
const changeFavouritesSearchText = createAction<string>("CHANGE_FAVOURITES_SEARCH_TEXT")
const changeSortBy = createAction<string>("CHANGE_SORT_BY")
const changeSortTypeBy = createAction<string>("CHANGE_SORT_TYPE_BY")
const showFavouritesModal = createAction<boolean>("SHOW_FAVOURITES_MODAL")
const addItemToFavourites = createAction<string>("ADD_ITEM_TO_FAVOURITES")
const removeItemFromFavourites = createAction<string>("REMOVE_ITEM_FROM_FAVOURITES")

export {
  fetchRequested,
  fetchSucceeded,
  fetchFailed,
  changePaginationIndex,
  changeSearchText,
  changeFavouritesSearchText,
  changeSortBy,
  changeSortTypeBy,
  showFavouritesModal,
  addItemToFavourites,
  removeItemFromFavourites,
}
