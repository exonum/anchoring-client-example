import * as constants from 'reducers/config/config.constants'
import { take, spawn, select, call } from 'redux-saga/effects'
import exonumAnchoring from './exonumAnchoring.saga'
import blockStatus from './blockStatus.saga'
import txStatus from './txStatus.saga'
import exonum from 'exonum-client-anchoring'
import { setShowModal, setSyncStart } from 'reducers/config/config.actions'

export default function * initializeCheck () {
  let exonumAnchoringSpawn, blockStatusSpawn, txStatusSpawn, anchoring
  while (true) {
    const { payload } = yield take(constants.CONFIG_SET)
    if (exonumAnchoringSpawn) exonumAnchoringSpawn.cancel()
    if (blockStatusSpawn) blockStatusSpawn.cancel()
    if (txStatusSpawn) txStatusSpawn.cancel()
    if (anchoring) anchoring.syncStop()

    const config = {
      driver: new exonum.drivers.Smartbit({
        token: null,
        network: payload.network
      }),
      provider: {
        nodes: payload.nodes
      }
    }
    anchoring = new exonum.Anchoring(config)
    exonumAnchoringSpawn = yield spawn(exonumAnchoring, anchoring)
    blockStatusSpawn = yield spawn(blockStatus, anchoring)
    txStatusSpawn = yield spawn(txStatus, anchoring)

    const { configModal } = yield select(({ config }) => config)
    if (configModal) yield call(setShowModal, false)
    yield call(setSyncStart, true)
  }
}
