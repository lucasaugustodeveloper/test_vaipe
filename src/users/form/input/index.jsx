import React from 'react'

export default props => {
  return (
    <input className='form-control' type={props.type} name={props.name} placeholder={props.placeholder} value={props.value} id={props.id} />
  )
}
