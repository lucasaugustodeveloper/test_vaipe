import Header from '../header'
import UserForm from './form'
import UserList from './list'

import React, { Component } from 'react'
import axios from 'axios'

class Users extends Component {
  constructor () {
    super()
    this.state = {
      id: 1,
      active: true,
      fistName: '',
      lastName: '',
      rating: '',
      user: []
    }

    this.handleGetUsers = this.handleGetUsers.bind(this)
    this.handleUserSubmit = this.handleUserSubmit.bind(this)
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this)
    this.handleChangeLastName = this.handleChangeLastName.bind(this)
    this.handleGetUsers()
  }

  handleGetUsers () {
    axios.get('user.json')
      .then(res => this.setState({ user: res.data }))
  }

  handleUserSubmit (e) {
    e.preventDefault()
    const firstName = e.target[0].value
    const lastName = ''
    const id = ''
    const active = ''
    const rating = ''
    console.log(e.target)
  }
  handleChangeFirstName (e) {
    this.setState({...this.state, firstName: e.target.value})
  }
  handleChangeLastName (e) {
    this.setState({ ...this.state, lastName: e.target.value })
  }

  render () {
    return (
      <div className='row'>
        <Header title='Listagem de Usuários' />
        <div className='col-lg-12'>
          <UserForm
            handleChangeFirstName={this.handleChangeFirstName}
            handleChangeLastName={this.handleChangeLastName}
            handleUserSubmit={this.handleUserSubmit}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            id={this.state.id}
            active={this.state.active}
          />
        </div>
        <div className='col-lg-12'>
          <UserList list={this.state.user}/>
        </div>
      </div>
    )
  }
}

export default Users
