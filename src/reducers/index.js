import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import config from './config/config.reducer'
import block from './block/block.reducer'
import status from './status/status.reducer'
import tx from './tx/tx.reducer'

export default combineReducers({
  form,
  config,
  block,
  status,
  tx
})
