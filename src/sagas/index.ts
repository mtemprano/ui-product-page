import { all, call, put, takeLatest } from "redux-saga/effects"
import { fetchItems } from "../helpers"
import type { ExtendedProductListItem } from "../helpers"
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
    const data: Array<ExtendedProductListItem> = yield call(fetchItems)
    yield put(fetchSucceeded(data))
  } catch (error: any) {
    yield put(fetchFailed(error))
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
