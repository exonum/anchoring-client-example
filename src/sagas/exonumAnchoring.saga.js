import { call } from 'redux-saga/effects'

export default function * exonumAnchoring (anchoring) {
  yield call(anchoring.on, 'loaded', e => console.log('loaded', e))
  yield call(anchoring.on, 'initialized', e => console.log('initialized', e))
  yield call(anchoring.on, 'synchronized', e => console.log('synchronized', e))
  yield call(anchoring.on, 'error', e => console.log('error', e))
}
