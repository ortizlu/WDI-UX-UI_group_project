import React, { Component } from 'react'
import './Textbox.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Textbox extends Component {
  // getState = () => {
  //   this.setState({
  //     link: 'path'
  //   })
  // }

  render() {
    let swot
    if (this.props.swot) {
      swot = (
        <Link to={'/swot_analysis'}>
          <FontAwesomeIcon icon="pencil-alt" className="fa-2x pencil" />
        </Link>
      )
    } else if (this.props.hidePencil) {
      swot = <span />
    } else {
      swot = (
        <Link to={'/' + this.props.oneBox.title}>
          <FontAwesomeIcon icon="pencil-alt" className="fa-2x pencil" />
        </Link>
      )
    }
    return (
      <div className={this.props.oneBox.title}>
        <div className="title">
          <h3>{this.props.oneBox.title}</h3>
          {swot}
        </div>
        <div className="content">
          <p>{this.props.oneBox.content}</p>
        </div>
      </div>
    )
  }
}

export default Textbox
