import React, { Component } from 'react'
import TextBox from './Textbox'

class PlanningPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div className="container">
        <div className="mission-vision">
          <TextBox
            oneBox={this.props.allBoxes[0]}
          />
          <TextBox
            oneBox={this.props.allBoxes[1]}
          />
        </div>
        <div className="value">
          <TextBox
            oneBox={this.props.allBoxes[2]}
          />
        </div>
        <div className="swot">
          <TextBox
            oneBox={this.props.allBoxes[3]}
          />
          <TextBox
            oneBox={this.props.allBoxes[4]}
          />
          <TextBox
            oneBox={this.props.allBoxes[5]}
          />
          <TextBox
            oneBox={this.props.allBoxes[6]}
          />
        </div>
      </div>
    )
  }
}

export default PlanningPage
