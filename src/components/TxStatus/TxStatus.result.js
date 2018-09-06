import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ReactJson from 'react-json-view'
import Alert from 'antd/lib/alert'

class TxStatusResult extends Component {
  render () {
    const { status } = this.props
    if (!status) return null

    return (
      <div>
        <Alert type='info' className='my-3' message={status.message} />
        <ReactJson name={false} src={status} collapsed={1} />
      </div>
    )
  }
}

TxStatusResult.propTypes = {
  status: PropTypes.shape({
    message: PropTypes.string
  })
}

const mapStateToProps = state => ({
  status: state.tx.status
})
export default connect(mapStateToProps)(TxStatusResult)
