import React, { Component } from 'react'

class FormInput extends Component {
  render () {
    return (
      <input className='form-control' type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} value={this.props.value} id={this.props.id} />
    )
  }
}

export default FormInput
