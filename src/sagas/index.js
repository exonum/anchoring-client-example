import { sagaMiddleware } from '../store'

import exonumAnchoring from './exonumAnchoring.saga'
import blockStatus from './blockStatus.saga'
import txStatus from './txStatus.saga'

sagaMiddleware.run(exonumAnchoring)
sagaMiddleware.run(blockStatus)
sagaMiddleware.run(txStatus)
