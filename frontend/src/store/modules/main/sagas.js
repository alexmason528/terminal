import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'

import * as actions from './actions'

export const doListAddress = function* ({ payload }) {
  try {
    const res = yield call(axios.get, '/address/', payload)
    yield put(actions.listAddressSuccess(res.data))
  } catch (error) {
    yield put(actions.listAddressFail(error))
  }
}

export const doCreateAddress = function* ({ payload }) {
  try {
    const res = yield call(axios.post, '/address/', payload)
    yield put(actions.createAddressSuccess(res.data))
  } catch (error) {
    yield put(actions.createAddressFail(error))
  }
}

export const doUpdateAddress = function* ({ payload }) {
  const { id, data } = payload

  try {
    const res = yield call(axios.get, `/address/${id}`, data)
    yield put(actions.listAddressSuccess(res.data))
  } catch (error) {
    yield put(actions.listAddressFail(error))
  }
}

export const doDeleteAddress = function* ({ payload }) {
  try {
    yield call(axios.get, `/address/${payload}`)
    yield put(actions.listAddressSuccess(payload))
  } catch (error) {
    yield put(actions.listAddressFail(error))
  }
}

export const saga = function* () {
  yield takeEvery(actions.LIST_ADDRESS, doListAddress)
  yield takeEvery(actions.CREATE_ADDRESS, doCreateAddress)
  yield takeEvery(actions.UPDATE_ADDRESS, doUpdateAddress)
  yield takeEvery(actions.DELETE_ADDRESS, doDeleteAddress)
}
