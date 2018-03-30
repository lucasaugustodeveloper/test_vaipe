import Input from './input'
import './form.css'

import React from 'react'

export default props => {
  return (
    <div className='formCadastro col-lg-12'>
      <form className='row'>
        <div className='col-lg-6 col-lg-offset-3'>
          <div className="col-lg-6">
            <label htmlFor='userFirstName'>Name</label>
            <Input
              type='text'
              name='firstName'
              placeholder='Enter your name'
              id='userFirstName'
              value={props.firstName} />
          </div>
          <div className='buttons col-lg-2'>
            <button type='submit' className='btn btn-success btn-block'
              onSubmit={props.handleUserSubmit}
            >Add</button>
          </div>
        </div>
      </form>
    </div>
  )
}
