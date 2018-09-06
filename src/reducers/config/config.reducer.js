import * as constants from './config.constants'
import Model from './config.model'

export default function config (state = Model, { type, payload }) {
  switch (type) {
    case constants.CONFIG_SET:
      return state.merge({ config: payload })
    case constants.CONFIG_SET_MODAL_SHOW:
      return state.merge({ configModal: payload })
    case constants.CONFIG_SET_SYNC_START:
      return state.merge({ syncStarted: payload })
    default:
      return state
  }
}
