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

            <Link to="/" className="category">Overview</Link>

            <Link to="/mission" className="category-item">Mission</Link>

            <Link to="/values" className="category-item">Values</Link>

            <Link to="/vision" className="category-item">Vision</Link>

            <Link to="/swot_analysis" className="category-item">SWOT Analysis</Link>

            <Link to="/implementation" className="category">Implementation</Link>

            <Link to="/objectives" className="category-item">Objectives</Link>

            <Link to="/tasks" className="category-item">Tasks</Link>

            <Link to="/roadmap" className="category-item">Roadmap</Link>

            <Link to="/share" className="category">Report/Share</Link>

            <Link to="/activity" className="category-item">Activity</Link>

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
