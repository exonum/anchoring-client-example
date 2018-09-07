import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Icon from 'antd/lib/icon'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'

class AnchoringStatus extends Component {
  render () {
    const { list } = this.props
    if (list.length === 0) return null
    console.log(list)

    return (
      <div className='panel'>
        <div className='list'>
          {list.map(item =>
            <Row key={item[0]} className='item my-2'>
              <Col span={2}>
                <Icon className='mt-1 icon' type='check-circle' theme='twoTone' twoToneColor='#52c41a' />
              </Col>
              <Col span={22}>
                <h4>Block {item[3]} anchored</h4>
                <div className='text-truncate'><b>State hash:</b> {item[4]}</div>
              </Col>
            </Row>
          )}
        </div>
      </div>
    )
  }
}

AnchoringStatus.propTypes = {
  list: PropTypes.arrayOf(PropTypes.array)
}

const mapStateToProps = state => ({
  list: state.status.list
})

export default connect(mapStateToProps)(AnchoringStatus)
