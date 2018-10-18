import React, { Component } from 'react'
import './RSB.css'

class RSB extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false
      //key : value
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
          <div className="expandedbar">
            <a onClick={this.close} className="closeyellow">
              x
            </a>
            <h1 className="bluetitle"> Writing your mission statement </h1>

            <p>
              {' '}
              Lorem ipsum dolor amet narwhal four dollar toast tofu unicorn.
              Echo park pitchfork tattooed narwhal DIY marfa, coloring book
              succulents whatever live-edge flannel air plant. Portland
              sartorial authentic letterpress normcore iceland lumbersexual
              copper mug trust fund hammock bushwick whatever. Franzen vegan
              jean shorts raclette actually lumbersexual mustache snackwave
              bicycle rights taxidermy stumptown brooklyn hot chicken
              williamsburg pinterest.
            </p>
            <h3>Tips</h3>
            <p>
              {' '}
              Lorem ipsum dolor amet narwhal four dollar toast tofu unicorn.
              Echo park pitchfork tattooed narwhal DIY marfa, coloring book
              succulents whatever live-edge flannel air plant. Portland
              sartorial authentic letterpress normcore iceland lumbersexual
              copper mug trust fund hammock bushwick whatever. Franzen vegan
              jean shorts raclette actually lumbersexual mustache snackwave
              bicycle rights taxidermy stumptown brooklyn hot chicken
              williamsburg pinterest.
            </p>
            <img src="./video.png" className="video" />
            <h3>Examples</h3>
            <p>
              Lorem ipsum dolor amet narwhal four dollar toast tofu unicorn.
              Echo park pitchfork tattooed narwhal DIY marfa, coloring book
              succulents whatever live-edge flannel air plant. Portland
              sartorial authentic letterpress normcore iceland lumbersexual
              copper mug trust fund hammock bushwick whatever. Franzen vegan
              jean shorts raclette actually lumbersexual mustache snackwave
              bicycle rights taxidermy stumptown brooklyn hot chicken
              williamsburg pinterest.
            </p>
          </div>
        ) : (
          <div className="lightbulb" onClick={this.expand}>
            <img src="./u1054.png" />
          </div>
        )}
      </div>
    )
  }
}

export default RSB
