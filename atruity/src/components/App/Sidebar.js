import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Sidebar.css'
import { Link } from 'react-router-dom'

class Sidebar extends Component {
  constructor() {
    super()
    this.state = {
      expanded: false
    }
  }

  expand = () => {
    this.setState({
      expanded: true
    })
  }

  close = () => {
    this.setState({
      expanded: false
    })
  }

  render() {
    return (
      <div>
        {this.state.expanded ? (
          <aside className="expanded">
            <a onClick={this.close} className="close">
              x
            </a>

            <a className="category">Planning</a>

            <a className="category-item">Mission</a>

            <a className="category-item">Values</a>

            <a className="category-item">Vision</a>

            <a className="category-item">SWOT Analysis</a>

            <a className="category">Implementation</a>

            <a className="category-item">Objectives</a>

            <a className="category-item">Tasks</a>

            <a className="category-item">Roadmap</a>

            <a className="category">Report/Share</a>

            <a className="category-item">Activity</a>

            <span>© 2018 Atruity, Inc,</span>
            <span>All Rights Reserved</span>
          </aside>
        ) : (
          <aside>
            <FontAwesomeIcon
              onClick={this.expand}
              icon="bars"
              className="fa-2x"
            />
          </aside>
        )}
      </div>
    )
  }
}

export default Sidebar
