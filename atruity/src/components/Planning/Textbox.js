import React, { Component } from "react";
import "./Textbox.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class Textbox extends Component {
  render() {
    return (
      <div className={this.props.title} >
        <div className="title">
          <h3>{this.props.title}</h3>
          <FontAwesomeIcon icon="pencil-alt" className='fa-2x' />
        </div>
        <div className="content">
            <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
}

export default Textbox;
