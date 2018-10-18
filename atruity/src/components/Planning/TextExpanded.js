import React, { Component } from 'react';

class TextExpanded extends Component {
  constructor(props){
    super(props)
    this.state = {
      textfield: "",
      title: this.props.singleBox.title
    }
  }
  changeText = e => { //event
    this.setState({textfield:e.target.value})

  }

  submitForm = e => {
    e.preventDefault() 
    this.props.contentChange(this.state)
    this.props.history.push('/')
  }
  

    render() { 
        
        return (
       <div>
       <div className={this.props.singleBox.title} >
        <div className="title">
          <h3>{this.props.singleBox.title}</h3>
        </div>
        <div className="content">
            <input type="text" name="name" placeholder={this.props.singleBox.placeholder} value={this.state.textfield} onChange={this.changeText}></input>
            {/* <p>{this.props.singleBox.placeholder}</p> */}
        </div>
       
      </div>
      <button type="submit" onClick={this.submitForm}> Submit </button>
      </div>
    );
  }
}

export default TextExpanded;