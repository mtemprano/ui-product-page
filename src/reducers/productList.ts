import { createReducer } from "@reduxjs/toolkit"
import { fetchRequested, fetchSucceeded, fetchFailed } from "../actions"
import type { ExtendedProductListItem } from "../helpers"

interface productionListState {
  loading: boolean
  data: Array<ExtendedProductListItem>
  error?: Error
}

const initialState: productionListState = {
  loading: false,
  data: [],
}

const productListReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchRequested, (state, action) => ({ ...state, loading: true }))
  builder.addCase(fetchSucceeded, (state, action) => ({
    ...state,
    data: action.payload,
    loading: false,
  }))
  builder.addCase(fetchFailed, (state, action) => ({
    ...state,
    error: action.payload,
    loading: false,
  }))
})

export default productListReducer
