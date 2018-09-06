import React from 'react'
import TxStatusForm from './TxStatus.form'
import TxStatusResult from './TxStatus.result'

export default () =>
  (<div className='panel max-height-50 overflow-scroll'>
    <h3 className='mb-3'>Check transaction status</h3>
    <TxStatusForm />
    <TxStatusResult />
  </div>)
