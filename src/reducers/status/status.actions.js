import * as constants from './status.constants'
import { store } from 'store'

const { dispatch } = store

export const setTxsList = list => dispatch({ type: constants.STATUS_SET_TXS, payload: list })
