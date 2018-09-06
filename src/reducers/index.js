import { combineReducers } from 'redux'

import status from './status/status.reducer'
import block from './block/block.reducer'
import tx from './tx/tx.reducer'

export default combineReducers({
  status,
  block,
  tx
})
