import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ReactJson from 'react-json-view'
import Alert from 'antd/lib/alert'

class BlockStatusResult extends Component {
  render () {
    const { status } = this.props
    if (!status) return null

    return (
      <div>
        <Alert type='info' className='my-3' message={status.message} />
        <ReactJson src={status} collapsed={1} name={false} />
      </div>)
  }
}

const mapStateToProps = state => ({
  status: state.block.status
})

BlockStatusResult.propTypes = {
  status: PropTypes.shape({
    message: PropTypes.string
  })
}
export default connect(mapStateToProps)(BlockStatusResult)
