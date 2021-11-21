import { createReducer } from "@reduxjs/toolkit"
import { changeSearchText } from "../actions"

const initialState = ""

const productListSearchReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeSearchText, (state, action) => action.payload)
})

export default productListSearchReducer
