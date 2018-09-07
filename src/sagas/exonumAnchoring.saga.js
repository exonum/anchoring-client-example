import { call, take } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import { setTxsList } from 'reducers/status/status.actions'

const LOADED = 'loaded'
const INITIALIZED = 'initialized'
const SYNCHRONIZED = 'synchronized'

const channel = (anchoring) =>
  eventChannel(emit => {
    anchoring.on(LOADED, e => emit({ type: LOADED, payload: e }))
    anchoring.on(INITIALIZED, e => emit({ type: INITIALIZED, payload: e }))
    anchoring.on(SYNCHRONIZED, e => emit({ type: SYNCHRONIZED, payload: e }))

    return () => {
      console.log('closed')
    }
  })

export default function * exonumAnchoring (anchoring) {
  const channelConnect = yield call(channel, anchoring)
  while (true) {
    const payload = yield take(channelConnect)
    setTxsList(payload.payload.anchorTxs.sort((a, b) => a[3] < b[3]))
  }
  // yield call(anchoring.on, 'loaded', e => console.log('loaded', e))
  // yield call(anchoring.on, 'initialized', e => console.log('initialized', e))
  // yield call(anchoring.on, 'synchronized', e => console.log('synchronized', e))
  // yield call(anchoring.on, 'error', e => console.log('error', e))
}
