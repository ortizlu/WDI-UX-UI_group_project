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
            title={this.props.titles[0]}
            content={this.props.mission[0]}
          />
          <TextBox
            title={this.props.titles[1]}
            content={this.props.mission[1]}
          />
        </div>
        <div className="value">
          <TextBox
            title={this.props.titles[2]}
            content={this.props.mission[2]}
          />
        </div>
        <div className="swot">
          <TextBox
            title={this.props.titles[3]}
            content={this.props.mission[3]}
          />
          <TextBox
            title={this.props.titles[4]}
            content={this.props.mission[4]}
          />
          <TextBox
            title={this.props.titles[5]}
            content={this.props.mission[5]}
          />
          <TextBox
            title={this.props.titles[6]}
            content={this.props.mission[6]}
          />
        </div>
      </div>
    )
  }
}

export default PlanningPage
