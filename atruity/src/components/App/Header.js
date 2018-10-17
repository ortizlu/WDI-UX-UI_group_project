import React, { Component } from 'react'
import '../App/Header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Atruity</h1>
        <div className="nav-items">
          <a>
            <span>Live</span> Chat
          </a>
          <a>
            Contact <span>Us</span>
          </a>
          <a>Resources</a>
          <a>Team</a>
          <a>Logout</a>
        </div>
      </header>
    )
  }
}

export default Header
