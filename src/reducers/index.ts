import { combineReducers } from "redux"
import paginationIndex from "./paginationIndex"
import productList from "./productList"
import productListSearch from "./productListSearch"
import changeSortBy from "./changeSortBy";
import changeSortTypeBy from "./changeSortTypeBy";

const productPageReducer = combineReducers({
  paginationIndex,
  productList,
  productListSearch,
  changeSortBy,
  changeSortTypeBy,
})

export default productPageReducer
