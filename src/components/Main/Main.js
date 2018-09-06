import React from 'react'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import BlockStatus from '../BlockStatus/BlockStatus'
import TxStatus from '../TxStatus/TxStatus'

const Main = () =>
  (<div>
    <Row>
      <Col span={12}>
        <BlockStatus />
      </Col>
      <Col span={12}>
        <TxStatus />
      </Col>
    </Row>
  </div>)

export default Main
