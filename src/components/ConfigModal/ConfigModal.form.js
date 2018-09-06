import React from 'react'
import { Field, FieldArray, reduxForm, propTypes } from 'redux-form'

import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Icon from 'antd/lib/icon'
import Popover from 'antd/lib/popover'
import SelectField from '../FieldInputs/Select.field'
import StringFieldArray from '../FieldInputs/String.fieldArray'

const ConfigForm = props => {
  const { handleSubmit } = props
  const networkOptions = [{ name: 'Mainnet', value: 'mainnet' }, { name: 'Testnet', value: 'testnet' }]
  return (
    <form onSubmit={handleSubmit}>
      <Row className='my-1'>
        <Col span={6}>
          <label>Network</label>
        </Col>
        <Col span={16}>
          <Field name='network' component={SelectField} options={networkOptions} />
        </Col>
        <Col span={2} className='info-icon'>
          <Popover content='Use Testnet for testnet network, Mainnet by default' trigger='hover'>
            <Icon type='info-circle' theme='filled' />
          </Popover>
        </Col>
      </Row>
      <Row className='my-1'>
        <Col span={6}>
          <label>Nodes IPs</label>
        </Col>
        <Col span={16}>
          <FieldArray name='nodes' component={StringFieldArray} />
        </Col>
        <Col span={2} className='info-icon'>
          <Popover
            content={<span>List of IP addresses of your Exonum nodes with a port. <br />
              All nodes in this list should be with HTTP module and CORS enabled.</span>}
            trigger='hover'>
            <Icon type='info-circle' theme='filled' />
          </Popover>
        </Col>
      </Row>
    </form>
  )
}

ConfigForm.propTypes = propTypes

export default reduxForm()(ConfigForm)
