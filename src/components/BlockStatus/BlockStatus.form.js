import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import InputNumber from 'antd/lib/input-number'
import Spin from 'antd/lib/spin'
import { blockStatus } from 'reducers/block/block.actions'

class BlockStatusForm extends Component {
  state = { block: null }
  onKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (this.state.block >= 0) {
        blockStatus(this.state.block)
      } else {
        this.setState({ block: 0 })
      }
    }
  }

  render () {
    const { loading } = this.props

    return (
      <Spin spinning={loading}>
        <form onKeyDown={this.onKeyDown}>
          <InputNumber
            min={0}
            placeholder='block height'
            value={this.state.block}
            onChange={e => this.setState({ block: e })} />
        </form>
      </Spin>
    )
  }
}

BlockStatusForm.propTypes = {
  loading: PropTypes.bool
}
const mapStateToProps = state => ({
  loading: state.block.loading
})
export default connect(mapStateToProps)(BlockStatusForm)
