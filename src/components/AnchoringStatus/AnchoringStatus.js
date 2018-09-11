import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Icon from 'antd/lib/icon'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Pagination from 'antd/lib/pagination'
import AnchoringStatusLoading from './AnchoringStatus.loading'

class AnchoringStatus extends Component {
  state = { page: 1, pageSize: 20 }

  render () {
    const { list, network } = this.props
    const { page, pageSize } = this.state
    if (list.length === 0) return null
    const link = network === 'testnet' ? 'https://testnet.smartbit.com.au/tx/' : 'https://smartbit.com.au/tx/'

    return (
      <div className='panel no-padding status'>
        <AnchoringStatusLoading />
        <div className='status-list'>
          {list
            .slice((page - 1) * pageSize, ((page - 1) * pageSize) + pageSize)
            .map(item =>
              <Row
                onClick={e => window
                  .open(`${link}${item[0]}`, '_blank')}
                key={item[0]}
                className='item pointer'>
                <Col span={2}>
                  <Icon className='mt-1 icon' type='safety-certificate' style={{ color: '#52c41a' }} />
                </Col>
                <Col span={22}>
                  <h4>Block {item[3]} anchored</h4>
                  <div className='text-truncate'><b>State hash:</b> {item[4]}</div>
                </Col>
              </Row>
            )}
        </div>
        <Pagination
          onChange={page => this.setState({ page })}
          total={list.length}
          pageSize={pageSize}
          current={page} />
      </div>
    )
  }
}

AnchoringStatus.propTypes = {
  list: PropTypes.arrayOf(PropTypes.array).isRequired,
  network: PropTypes.string
}

const mapStateToProps = state => ({
  list: state.status.list,
  network: state.config.config.network
})

export default connect(mapStateToProps)(AnchoringStatus)
