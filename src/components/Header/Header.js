import React, { Component } from 'react'
import Button from 'antd/lib/button'
import { setShowModal } from 'reducers/config/config.actions'

class Header extends Component {
  render () {
    return (
      <header>
        <h1 className='no-margin text-bold text-asbestos'>
          <img src='/assets/img/logo.png' className='logo mr-3' />
          Exonum anchoring example
        </h1>
        <div className='right'><Button shape='circle' icon='setting' onClick={e => setShowModal(true)} /></div>
      </header>
    )
  }
}

export default Header
