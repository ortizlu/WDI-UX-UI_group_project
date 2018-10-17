import React, { Component } from 'react';

class TextExpanded extends Component {
    render() { 
        console.log(this.titles)
        return (
       <div className={this.props.title} >
        <div className="title">
          <h3>{this.props.titles}</h3>
        </div>
        <div className="content">
            <p>{this.props.mission}</p>
        </div>
      </div>
    );
  }
}

export default TextExpanded;