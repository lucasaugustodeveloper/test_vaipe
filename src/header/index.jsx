import './index.css'

import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <header className='header col-lg-12'>
        <h1>{ this.props.title }</h1>
      </header>
    )
  }
}

export default Header
