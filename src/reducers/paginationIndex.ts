import { createReducer } from '@reduxjs/toolkit'
import { changePaginationIndex } from '../actions';

const initialState = 1;

const paginationIndexReducer = createReducer(initialState, (builder) => {
    builder.addCase(changePaginationIndex, (state, action) => action.payload)
})

export default paginationIndexReducer;
