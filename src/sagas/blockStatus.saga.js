import * as constants from 'reducers/block/block.constants'
import { take, call, put } from 'redux-saga/effects'

export default function * blockStatus (anchoring) {
  while (true) {
    const { payload } = yield take(constants.BLOCK_STATUS_START)
    try {
      const status = yield call(anchoring.blockStatus, payload)
      yield put({ type: constants.BLOCK_STATUS_LOADED, payload: status })
    } catch (e) {
      yield put({ type: constants.BLOCK_STATUS_ERRORED, payload: e })
    }
  }
}
