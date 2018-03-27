import React, { Component } from 'react'

class Navbar extends Component {
  render () {
    return (
      <div className="row">
        <nav className='navbar navbar-inverse'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <a href='#/users' className='navbar-brand'>
                <i className="fa fa-user" aria-hidden='true'></i>
              </a>
            </div>
            <div className='navbar-collapse'>
              <ul className='nav navbar-nav'>
                <li>
                  <a href='#/users'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#/home'>
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
