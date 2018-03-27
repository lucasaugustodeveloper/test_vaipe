import 'modules/bootstrap/dist/css/bootstrap.css'
import 'modules/font-awesome/css/font-awesome.css'
import 'assets/css/general.css'

import React, { Component } from 'react'

import Navbar from '../navbar'
import Routes from '../main/router'

class App extends Component {
  render () {
    return (
      <div className=''>
        <Navbar />
        <Routes />
      </div>
    )
  }
}

export default App
