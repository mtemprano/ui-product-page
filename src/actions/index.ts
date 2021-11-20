import { createAction } from "@reduxjs/toolkit"
import type { ProductListItem } from "../helpers"

const fetchRequested = createAction<undefined>("FETCH_REQUESTED")
const fetchSucceeded = createAction<Array<ProductListItem>>("FETCH_SUCCEEDED")
const fetchFailed = createAction<Error>("FETCH_FAILED")
const changePaginationIndex = createAction<number>("CHANGE_PAGINATION_INDEX")
const changeSearchText = createAction<string>("CHANGE_SEARCH_TEXT")
const changeSortBy = createAction<string>("CHANGE_SORT_BY")
const changeSortTypeBy = createAction<string>("CHANGE_SORT_TYPE_BY")

export { fetchRequested, fetchSucceeded, fetchFailed, changePaginationIndex, changeSearchText, changeSortBy, changeSortTypeBy }
