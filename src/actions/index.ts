import { createAction } from "@reduxjs/toolkit"
import { AnyAction } from "redux"
import type { ProductListItem } from "../helpers"

const fetchRequested = createAction<undefined>("FETCH_REQUESTED")
const fetchSucceeded = createAction<Array<ProductListItem>>("FETCH_SUCCEEDED")
const fetchFailed = createAction<Error>("FETCH_FAILED")
const changePaginationIndex = createAction<number>("CHANGE_PAGINATION_INDEX")

interface FetchRequested extends AnyAction {
  type: string
}
interface FetchSucceeded extends AnyAction {
  type: string
  data: Array<ProductListItem>
}
interface FetchFailed extends AnyAction {
  type: string
  error: Error
}
interface ChangePaginationIndex extends AnyAction {
  type: string
  paginationIndex: number
}

export { fetchRequested, fetchSucceeded, fetchFailed, changePaginationIndex }

export type { FetchRequested, FetchSucceeded, FetchFailed, ChangePaginationIndex }
