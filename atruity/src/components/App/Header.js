import React, { Component } from 'react'
import '../App/Header.css'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <h1 className="atruity">Atruity</h1>
        </Link>
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
