import * as constants from './tx.constants'
import { store } from 'store'

const { dispatch } = store

export const txStatus = tx => dispatch({ type: constants.TX_STATUS_START, payload: tx })
