import * as constants from './status.constants'
import Model from './status.model'

export default function status (state = Model, { type, payload }) {
  switch (type) {
    case constants.STATUS_SET_TXS:
      return state.merge({ list: payload })
    case constants.STATUS_CLEAN:
      return Model
    default:
      return state
  }
}
