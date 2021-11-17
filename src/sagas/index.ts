import { all, call, put, takeLatest } from "redux-saga/effects"
import { fetchItems } from "../helpers"
import type { ProductListItem } from "../helpers"
import { fetchRequested, fetchSucceeded, fetchFailed } from "../actions"

function* fetchData() {
  try {
    const data: Array<ProductListItem> = yield call(fetchItems)
    yield put(fetchSucceeded(data))
  } catch (error) {
    yield put(fetchFailed(new Error("Fetch failed, please try again later")))
  }
}

function* watchFetchData() {
  yield takeLatest(fetchRequested.toString(), fetchData)
}

export default function* rootSaga() {
  yield all([watchFetchData()])
}
