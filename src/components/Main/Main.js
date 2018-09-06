import React from 'react'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Header from '../Header/Header'
import BlockStatus from '../BlockStatus/BlockStatus'
import TxStatus from '../TxStatus/TxStatus'
import ConfigModal from '../ConfigModal/ConfigModal'

const Main = () =>
  (<div>
    <Header />
    <Row>
      <Col span={12}>
        <BlockStatus />
      </Col>
      <Col span={12}>
        <TxStatus />
      </Col>
    </Row>
    <ConfigModal />
  </div>)

export default Main
