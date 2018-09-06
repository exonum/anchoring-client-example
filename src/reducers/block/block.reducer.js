import * as constants from './block.constants'
import Model from './block.model'

export default function block (state = Model, { type, payload }) {
  switch (type) {
    case constants.BLOCK_STATUS_START:
      return state.merge({ loading: true, block: payload, status: null, error: null })
    case constants.BLOCK_STATUS_LOADED:
      return state.merge({ loading: false, status: payload })
    case constants.BLOCK_STATUS_ERRORED:
      return state.merge({ loading: false, status: null, error: payload })
    default:
      return state
  }
}
