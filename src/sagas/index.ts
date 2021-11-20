import { all, call, put, takeLatest } from "redux-saga/effects"
import { fetchItems } from "../helpers"
import type { ProductListItem } from "../helpers"
import {
  fetchRequested,
  fetchSucceeded,
  fetchFailed,
  changeSortTypeBy,
  changeSearchText,
  changeSortBy,
  changePaginationIndex,
} from "../actions"

function* fetchData() {
  try {
    const data: Array<ProductListItem> = yield call(fetchItems)
    yield put(fetchSucceeded(data))
  } catch (error) {
    yield put(fetchFailed(new Error("Fetch failed, please try again later")))
  }
}

function* resetPageNumber() {
    yield put(changePaginationIndex(1))
}

function* watchFetchData() {
  yield takeLatest(fetchRequested.toString(), fetchData)
}

function* watchChangeFilterTypes() {
  yield takeLatest([changeSortTypeBy.toString(), changeSearchText.toString(), changeSortBy.toString()], resetPageNumber)
}

export default function* rootSaga() {
  yield all([watchFetchData(), watchChangeFilterTypes()])
}
