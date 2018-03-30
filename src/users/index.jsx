import Header from '../header'
import UserForm from './form'
import UserList from './list'

import React, { Component } from 'react'
import axios from 'axios'

class Users extends Component {
  constructor () {
    super()
    this.state = {
      firstName: '',
      user: []
    }

    this.handleGetUsers = this.handleGetUsers.bind(this)
    this.handleUserSubmit = this.handleUserSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleGetUsers()
  }

  handleGetUsers () {
    axios.get('user.json')
      .then(res => this.setState({ user: res.data }))
  }

  handleUserSubmit (e) {
    e.preventDefault()
    this.setState.user.push({name: {first: this.state.firstName}})
  }

  handleChange (e) {
    this.setState.user.push({ name: { first: this.state.firstName } })
  }

  render () {
    return (
      <div className='row'>
        <Header title='Listagem de Usuários' />
        <div className='col-lg-12'>
          <UserForm
            firstName={this.state.firstName}
            handleChange={this.handleChange}
            handleUserSubmit={this.handleUserSubmit}
          />
        </div>
        <div className='col-lg-12'>
          <UserList list={this.state.user} />
        </div>
      </div>
    )
  }
}

export default Users
