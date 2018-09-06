import React from 'react'
import BlockStatusForm from './BlockStatus.form'
import BlockStatusResult from './BlockStatus.result'

export default () =>
  (<div className='panel max-height-50 overflow-scroll'>
    <h3 className='mb-3'>Check block status</h3>
    <BlockStatusForm />
    <BlockStatusResult />
  </div>)
