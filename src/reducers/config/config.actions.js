import * as constants from './config.constants'
import { store } from 'store'

const { dispatch } = store

export const setConfig = config => dispatch({ type: constants.CONFIG_SET, payload: config })
export const setShowModal = payload => dispatch({ type: constants.CONFIG_SET_MODAL_SHOW, payload })
export const setSyncStart = payload => dispatch({ type: constants.CONFIG_SET_SYNC_START, payload })
