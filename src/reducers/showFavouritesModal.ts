import { createReducer } from "@reduxjs/toolkit"
import { showFavouritesModal } from "../actions"

const initialState = false

const showFavouritesModalReducer = createReducer(initialState, (builder) => {
    builder.addCase(showFavouritesModal, (state, action) => action.payload)
})

export default showFavouritesModalReducer
