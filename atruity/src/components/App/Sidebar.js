import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Sidebar.css'

class Sidebar extends Component {
  render() {
    return (
      <aside>
        <FontAwesomeIcon icon="bars" className="fa-2x" />
      </aside>
    )
  }
}

export default Sidebar
