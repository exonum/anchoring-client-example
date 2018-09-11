import { call, take } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import { setTxsList } from 'reducers/status/status.actions'
import { setLoaded } from 'reducers/config/config.actions'

const LOADED = 'loaded'
const INITIALIZED = 'initialized'
const SYNCHRONIZED = 'synchronized'
const ERROR = 'error'

const channel = (anchoring) =>
  eventChannel(emit => {
    anchoring.on(LOADED, e => emit({ type: LOADED, payload: e }))
    anchoring.on(INITIALIZED, e => emit({ type: INITIALIZED, payload: e }))
    anchoring.on(SYNCHRONIZED, e => emit({ type: SYNCHRONIZED, payload: e }))
    anchoring.on(ERROR, e => emit({ type: ERROR, payload: e }))

    return () => {}
  })

export default function * exonumAnchoring (anchoring) {
  const channelConnect = yield call(channel, anchoring)
  while (true) {
    const { payload, type } = yield take(channelConnect)
    if (type !== ERROR) setTxsList([...payload.anchorTxs].sort((a, b) => b[3] - a[3]))
    else console.error('[ERROR IN ANCHORING-CLIENT]', payload)
    if (type === LOADED) setLoaded(false)
    if (type === SYNCHRONIZED) setLoaded(true)
  }
}
