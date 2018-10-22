import React, { Component } from 'react'
import './Textbox.css'
// import TextExpanded from '../Planning/TextExpanded'
// import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Rsb from '../Planning/RSB'

class SWOT extends Component {
  constructor() {
    super()
    this.state = {
      str: '',
      wkn: '',
      opp: '',
      thr: ''
    }
  }

  submitForm = e => {
    e.preventDefault()
    this.props.changeSwot(this.state)
    this.props.history.push('/')
  }

  changeText = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="flex-between">
        <div>
          <div className="textinput">
            <div className={this.props.boxes[3].title}>
              <div className="title">
                <h3>{this.props.boxes[3].title}</h3>
              </div>
              <div className="content">
                <textarea
                  name="str"
                  placeholder={this.props.boxes[3].placeholder}
                  value={this.state.str}
                  onChange={this.changeText}
                />
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="textinput">
              <div className={this.props.boxes[4].title}>
                <div className="title">
                  <h3>{this.props.boxes[4].title}</h3>
                </div>
                <div className="content">
                  <textarea
                    name="wkn"
                    placeholder={this.props.boxes[4].placeholder}
                    value={this.state.wkn}
                    onChange={this.changeText}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="textinput">
              <div className={this.props.boxes[5].title}>
                <div className="title">
                  <h3>{this.props.boxes[5].title}</h3>
                </div>
                <div className="content">
                  <textarea
                    name="opp"
                    placeholder={this.props.boxes[5].placeholder}
                    value={this.state.opp}
                    onChange={this.changeText}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="textinput">
              <div className={this.props.boxes[6].title}>
                <div className="title">
                  <h3>{this.props.boxes[6].title}</h3>
                </div>
                <div className="content">
                  <textarea
                    name="thr"
                    placeholder={this.props.boxes[6].placeholder}
                    value={this.state.thr}
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
          </div>
        </div>
        <Rsb className="" />
      </div>
    )
  }
}

export default SWOT
