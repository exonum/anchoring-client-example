import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Icon from 'antd/lib/icon'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'

const AnchoringStatusLoading = ({ loaded }) =>
  loaded
    ? <Row className='loaded'>
      <Col span={2}>
        <Icon type='check' theme='outlined' />
      </Col>
      <Col span={22}>
        Synced
      </Col>
    </Row>
    : <Row className='loading'>
      <Col span={2}>
        <Icon type='loading' />
      </Col>
      <Col span={22}>
        Loading
      </Col>
    </Row>

AnchoringStatusLoading.propTypes = {
  loaded: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  loaded: state.config.loaded
})
export default connect(mapStateToProps)(AnchoringStatusLoading)
