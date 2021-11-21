import { createReducer } from "@reduxjs/toolkit"
import { changeSortTypeBy } from "../actions"

const initialState = ""

const changeSortTypeByReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeSortTypeBy, (state, action) => action.payload)
})

export default changeSortTypeByReducer
