import React from 'react'

export default props => {
  const renderRows = () => {
    const list = props.list || []

    return list.map(user => (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.active}</td>
        <td>{user.name.first} {user.name.last}</td>
        <td>{user.rating[0]}</td>
      </tr>
    ))
  }

  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th width='10%'>ID</th>
          <th width='10%'>Active</th>
          <th width='40%'>Name</th>
          <th width='40%'>Rating</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}
