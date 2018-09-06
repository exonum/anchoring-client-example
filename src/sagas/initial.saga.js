import * as constants from 'reducers/config/config.constants'
import { call, select, spawn, put } from 'redux-saga/effects'
import { setShowModal } from 'reducers/config/config.actions'
import initializeCheck from './initializeCheck.saga'

export default function * initial () {
  const { config } = yield select(({ config }) => config)
  yield spawn(initializeCheck)
  if (!config.network) yield call(setShowModal, true)
  else {
    yield call(setShowModal, false)
    yield put({ type: constants.CONFIG_SET, payload: config })
  }
}
