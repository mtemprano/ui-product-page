import {createReducer} from "@reduxjs/toolkit";
import {addItemToFavourites, removeItemFromFavourites} from "../actions";

const initialState: Array<string> = [];

const favouritesReducer = createReducer(initialState, (builder) => {
    builder.addCase(addItemToFavourites, (state, action) => {
        if (!state.find((id) => id === action.payload)) {
            return [...state, action.payload]
        } else return state
    })
    builder.addCase(removeItemFromFavourites, (state, action) => {
        const index = state.findIndex((id) => id === action.payload)
        if (index >= 0) {
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ]
        } else return state
    })
})

export default favouritesReducer
