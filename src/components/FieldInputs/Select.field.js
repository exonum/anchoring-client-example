import React, { Component } from 'react'
import { fieldPropTypes } from 'redux-form'
import PropTypes from 'prop-types'

import Select from 'antd/lib/select'
import Alert from 'antd/lib/alert'

const { Option } = Select

class SelectField extends Component {
  render () {
    const { input: { value, onChange }, options, placeholder, size, disabled, meta: { dirty, error } } = this.props
    return (
      <Select
        disabled={disabled}
        size={size}
        placeholder={placeholder}
        value={value}
        onSelect={e => onChange(e)}>
        {options.map(({ name, value }) => <Option key={value}>{name}</Option>)}
        {dirty && error && <Alert message={error} type='error' />}
      </Select>
    )
  }
}

SelectField.propTypes = {
  ...fieldPropTypes,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string
  })).isRequired
}

export default SelectField
