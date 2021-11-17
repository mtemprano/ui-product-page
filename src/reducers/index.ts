import { combineReducers } from 'redux';
import paginationIndex from './paginationIndex';
import productList from './productList';

const productPageReducer = combineReducers({
    paginationIndex,
    productList,
});

export default productPageReducer;
