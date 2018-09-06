import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import PropTypes from 'prop-types'

import Modal from 'antd/lib/modal'
import Button from 'antd/lib/button'
import Alert from 'antd/lib/alert'
import ConfigModalForm from './ConfigModal.form'
import { setConfig, setShowModal } from 'reducers/config/config.actions'

class ConfigModal extends Component {
  render () {
    const { dispatch, configModal, config } = this.props

    const formName = 'configForm'

    return (
      <Modal
        title='Configure Exonum anchoring client'
        visible={configModal}
        onCancel={() => setShowModal(false)}
        footer={<Button type='primary' onClick={() => dispatch(submit(formName))}>Start sync</Button>}>
        <ConfigModalForm
          initialValues={{
            network: config.network || 'mainnet',
            nodes: config.nodes.length > 0 ? config.nodes : ['http://localhost:8000']
          }}
          form={formName}
          onSubmit={setConfig} />
        <Alert className='mt-3' message={
          <span>More information about config in
            <a href='https://github.com/exonum/exonum-client-anchoring#config' target='_blank'> README</a>
          </span>} />
      </Modal>
    )
  }
}

ConfigModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  configModal: PropTypes.bool.isRequired,
  config: PropTypes.shape({
    network: PropTypes.string,
    nodes: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
}

const mapStateToProps = state => ({
  configModal: state.config.configModal,
  config: state.config.config
})
export default connect(mapStateToProps)(ConfigModal)
