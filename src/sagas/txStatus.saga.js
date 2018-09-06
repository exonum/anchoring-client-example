import * as constants from 'reducers/tx/tx.constants'
import { take, call, put } from 'redux-saga/effects'

export default function * txStatus (anchoring) {
  while (true) {
    const { payload } = yield take(constants.TX_STATUS_START)
    try {
      const status = yield call(anchoring.txStatus, payload)
      yield put({ type: constants.TX_STATUS_LOADED, payload: status })
    } catch (e) {
      yield put({ type: constants.TX_STATUS_ERRORED, payload: e })
    }
  }
}
