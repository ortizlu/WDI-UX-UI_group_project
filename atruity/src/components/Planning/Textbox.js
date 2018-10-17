import React, { Component } from "react";
import "./Textbox.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class Textbox extends Component {

  getState = () => {
    this.setState({
      link: 'path'
    })
  }

  render() {
    return (
      <div className={this.props.title} >
        <div className="title">
          <h3>{this.props.title}</h3>
          <a><FontAwesomeIcon icon="pencil-alt" className='fa-2x' onClick={this.setState} /></a>
        </div>
        <div className="content">
            <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
}

export default Textbox;
