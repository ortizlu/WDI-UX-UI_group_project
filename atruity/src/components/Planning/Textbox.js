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
    console.log(this.Link)
    return (
      <div className={this.props.oneBox.title}>
        <div className="title">
          <h3>{this.props.oneBox.title}</h3>
          <Link to={'/' + this.props.oneBox.title}>
            <FontAwesomeIcon icon="pencil-alt" className="fa-2x pencil" />
          </Link>
        </div>
        <div className="content">
          <p>{this.props.oneBox.content}</p>
        </div>
      </div>
    )
  }
}

export default Textbox
