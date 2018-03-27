import Input from './input'
import './form.css'

import React, { Component } from 'react'

class Form extends Component {
  render () {
    return (
      <div className='formCadastro col-lg-12'>
        <form className='row' onSubmit={this.props.handleUserSubmit}>
          <div className='col-lg-6 col-lg-offset-3'>
            <div className="col-lg-6">
              <label htmlFor='userFirstName'>First Name</label>
              <Input
                type='text'
                name='firstName'
                placeholder='Enter your first name'
                id='userFirstName'
                value={this.props.firstName}
                onChange={this.props.handleChangeFirstName} />
            </div>

            <div className="col-lg-6">
              <label htmlFor='userLastName'>Last Name</label>
              <Input
                type='text'
                name='lastName'
                placeholder='Enter your last name'
                id='userLastName'
                value={this.props.lastName}
                onChange={this.props.handleChangeLastName} />
            </div>

            <div className="col-lg-4">
              <label htmlFor='userID'>ID</label>
              <Input
                type='number'
                name='userID'
                placeholder='enter your ID'
                value={this.props.id}
                onChange={this.props.handleChange}
              />
            </div>

            <div className='col-lg-4'>
              <label htmlFor='userActive'>Active</label>
              <input
                className='form-control'
                type='checkbox'
                name='active'
                checked={this.props.active}
                onChange={this.props.handleChange}
              />
            </div>

            <div className="col-lg-4">
              <label htmlFor='userRating'>Rating</label>
              Rating
            </div>
          </div>

          <div className='buttons col-lg-2 col-lg-offset-5'>
            <button type='submit' className='btn btn-success btn-block'>Add</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Form
