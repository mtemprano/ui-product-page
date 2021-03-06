import { combineReducers } from "redux"
import paginationIndex from "./paginationIndex"
import productList from "./productList"
import productListSearch from "./productListSearch"
import changeSortBy from "./changeSortBy"
import changeSortTypeBy from "./changeSortTypeBy"
import showFavouritesModal from "./showFavouritesModal"
import favourites from "./favourites"
import favouritesSearchText from "./favouritesSearchText"

const productPageReducer = combineReducers({
  paginationIndex,
  productList,
  productListSearch,
  changeSortBy,
  changeSortTypeBy,
  showFavouritesModal,
  favourites,
  favouritesSearchText,
})

export default productPageReducer
