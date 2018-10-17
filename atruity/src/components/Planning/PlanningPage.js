import React, { Component } from 'react'
import TextBox from './Textbox'

class PlanningPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titles: [
        'mission',
        'vision',
        'values',
        'strengths',
        'weaknesses',
        'opportunities',
        'threats'
      ],
      mission: [
        `This is a good place to start your strategic planning journey!`,
        `You'll set your company's direction here.`,
        `You'll put into words what your company cares about here.`,
        `To edit, click the pencil icon`,
        `To edit, click the pencil icon`,
        `To edit, click the pencil icon`,
        `To edit, click the pencil icon`,
        `To edit, click the pencil icon`
      ]
    }
  }
  render() {
    return (
      <div className="container">
        <div className="mission-vision">
          <TextBox
            title={this.state.titles[0]}
            content={this.state.mission[0]}
          />
          <TextBox
            title={this.state.titles[1]}
            content={this.state.mission[1]}
          />
        </div>
        <div className="value">
          <TextBox
            title={this.state.titles[2]}
            content={this.state.mission[2]}
          />
        </div>
        <div className="swot">
          <TextBox
            title={this.state.titles[3]}
            content={this.state.mission[3]}
          />
          <TextBox
            title={this.state.titles[4]}
            content={this.state.mission[4]}
          />
          <TextBox
            title={this.state.titles[5]}
            content={this.state.mission[5]}
          />
          <TextBox
            title={this.state.titles[6]}
            content={this.state.mission[6]}
          />
        </div>
      </div>
    )
  }
}

export default PlanningPage
