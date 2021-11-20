import { createReducer } from "@reduxjs/toolkit"
import { changeSortBy } from "../actions"

const initialState = ''

const changeSortByReducer = createReducer(initialState, (builder) => {
    builder.addCase(changeSortBy, (state, action) => action.payload)
})

export default changeSortByReducer
