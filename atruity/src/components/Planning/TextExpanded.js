import React, { Component } from 'react'
import './TextExpanded.css'
import Rsb from './RSB.js'

class TextExpanded extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textfield: '',
      title: this.props.singleBox.title
    }
  }
  changeText = e => {
    //event
    this.setState({ textfield: e.target.value })
  }

  submitForm = e => {
    e.preventDefault()
    this.props.contentChange(this.state)
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="flex">
        <div className="textinput">
          <div className={this.props.singleBox.title}>
            <div className="title">
              <h3>{this.props.singleBox.title}</h3>
            </div>
            <div className="content">
              <textarea
                name="name"
                placeholder={this.props.singleBox.placeholder}
                value={this.state.textfield}
                onChange={this.changeText}
              />
            </div>
          </div>
          <button
            className="submit-button"
            type="submit"
            onClick={this.submitForm}
          >
            {' '}
            Submit{' '}
          </button>
        </div>

        <Rsb />
      </div>
    )
  }
}

export default TextExpanded
