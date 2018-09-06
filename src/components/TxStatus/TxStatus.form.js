import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Input from 'antd/lib/input'
import Spin from 'antd/lib/spin'
import { txStatus } from 'reducers/tx/tx.actions'

class TxStatusForm extends Component {
  state = { tx: null }

  onKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (/^[0-9A-Za-z]{64}$/.test(this.state.tx)) {
        txStatus(this.state.tx)
      } else {
        this.setState({ tx: null })
      }
    }
  }

  render () {
    const { loading } = this.props

    return (
      <Spin spinning={loading}>
        <form onKeyDown={this.onKeyDown}>
          <Input placeholder='Tx hash' value={this.state.tx} onChange={e => this.setState({ tx: e.target.value })} />
        </form>
      </Spin>
    )
  }
}

TxStatusForm.propTypes = {
  loading: PropTypes.bool
}

const mapStateToProps = state => ({
  loading: state.tx.loading
})
export default connect(mapStateToProps)(TxStatusForm)
