import * as constants from './block.constants'
import { store } from 'store'

const { dispatch } = store

export const blockStatus = block => dispatch({ type: constants.BLOCK_STATUS_START, payload: block })
