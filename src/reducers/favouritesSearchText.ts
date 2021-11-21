import { createReducer } from "@reduxjs/toolkit"
import { changeFavouritesSearchText } from "../actions"

const initialState = ""

const favouritesSearchTextReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeFavouritesSearchText, (state, action) => action.payload)
})

export default favouritesSearchTextReducer
