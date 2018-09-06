import React, { Component } from 'react'
import { fieldArrayPropTypes } from 'redux-form'

import Select from 'antd/lib/select'
import Alert from 'antd/lib/alert'

class StringFieldArray extends Component {
  render () {
    const { fields, placeholder, size, disabled, meta: { dirty, error } } = this.props
    return (
      <div>
        <Select
          disabled={disabled}
          size={size}
          placeholder={placeholder}
          value={fields.getAll() ? [...fields.getAll()] : []}
          onSelect={e => fields.push(e)}
          onDeselect={e => fields.remove(fields.getAll().indexOf(e))}
          mode={'tags'} />
        {dirty && error && <Alert message={error} type='error' />}
      </div>
    )
  }
}

StringFieldArray.propTypes = fieldArrayPropTypes

export default StringFieldArray
