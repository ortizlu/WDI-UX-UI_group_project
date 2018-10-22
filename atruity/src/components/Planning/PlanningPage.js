import React, { Component } from 'react'
import TextBox from './Textbox'
import '../App/Header.css'

class PlanningPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="container">
        <div className="mission-vision">
          <TextBox oneBox={this.props.allBoxes[0]} />
          <TextBox oneBox={this.props.allBoxes[1]} />
        </div>
        <div className="value">
          <TextBox oneBox={this.props.allBoxes[2]} />
        </div>
        <div className="swot">
          <TextBox oneBox={this.props.allBoxes[3]} hidePencil={true} />
          <TextBox oneBox={this.props.allBoxes[4]} swot={true} />
          <TextBox oneBox={this.props.allBoxes[5]} hidePencil={true} />
          <TextBox oneBox={this.props.allBoxes[6]} hidePencil={true} />
        </div>
      </div>
    )
  }
}

export default PlanningPage
