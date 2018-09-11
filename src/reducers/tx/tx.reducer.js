import * as constants from './tx.constants'
import Model from './tx.model'

export default function tx (state = Model, { type, payload }) {
  switch (type) {
    case constants.TX_STATUS_START:
      return state.merge({ loading: true, tx: payload, status: null, error: null })
    case constants.TX_STATUS_LOADED:
      return state.merge({ loading: false, status: payload, error: null })
    case constants.TX_STATUS_ERRORED:
      return state.merge({ loading: false, status: null, error: payload })
    case constants.TX_CLEAN:
      return Model
    default:
      return state
  }
}
